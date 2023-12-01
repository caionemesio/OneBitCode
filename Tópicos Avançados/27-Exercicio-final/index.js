let balanceValue = 0
function renderTransactions(transaction) {
  try {
    const transactionContent = document.createElement('article')
    transactionContent.textContent = `ID:${transaction.id}`
    transactionContent.classList.add('transactionContent')
    transactionContent.id = `transactionContent${transaction.id}`
    transactionContent.oldValue = transaction.value//edited


    const nameContent = document.createElement('h3')
    nameContent.textContent = `Nome: ${transaction.name}`
    nameContent.id = `nameContent${transaction.id}`

    const valueTransaction = document.createElement('h3')
    valueTransaction.textContent = `Valor : $${transaction.value}`
    valueTransaction.id = `valueTransaction${transaction.id}`


    transactionContent.append(nameContent, valueTransaction)
    document.getElementById('showTransitions').append(transactionContent)
  } catch (error) {
    alert('Erro ao renderizar a transação:', error);
  }
}



async function getDataDB() {

  const response = await fetch('http://localhost:3000/transactions').then(r => r.json())
  response.forEach(renderTransactions)
  getBalance() //editado
}

document.addEventListener('DOMContentLoaded', () => {
  getDataDB()
})
const formPost = document.getElementById('formCadastro')

formPost.addEventListener('submit', async (ev) => {
  ev.preventDefault()


  const newTransaction = {
    name: document.getElementById('name').value,
    value: document.getElementById('value').value
  }
  // if (!newTransaction.name.match(/[a-zA-Z]{2,}/)) {
  //   return Promise.reject("O nome precisa de ao menos 2 letras")
  // }

  const response = await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTransaction)

  })

  const saveData = await response.json()
  formPost.reset()
  let AddOperation = operationBalance(newTransaction)
  renderTransactions(saveData)
  alterBalance(AddOperation)
  getBalance()
})

const formEdit = document.getElementById('formEdit')



//EDIT
formEdit.addEventListener('submit', async (ev) => {
  ev.preventDefault()
  const idAlter = document.getElementById('id_edit').value

  const EditTransaction = {
    name: document.getElementById('name_edit').value,
    value: document.getElementById('value_edit').value
  }

  const oldValueTransaction = document.getElementById(`transactionContent${idAlter}`).oldValue;//edited

  const response = await fetch(`http://localhost:3000/transactions/${idAlter}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(EditTransaction)

  })

  const editData = await response.json()
  formEdit.reset()
  operationBalance(EditTransaction)
  operationBalance({ value: -parseFloat(oldValueTransaction) })
  document.getElementById(`transactionContent${idAlter}`).oldValue = EditTransaction.value
  editTransactions(editData)
  getBalance()
})

async function editTransactions(editTransaction) {
  const newNameContent = document.getElementById(`nameContent${editTransaction.id}`)
  newNameContent.innerText = `Nome:${editTransaction.name}`

  const newValueTransaction = document.getElementById(`valueTransaction${editTransaction.id}`)
  newValueTransaction.innerText = `Valor:$${editTransaction.value}`

}

//DELETE
const deleteButton = document.getElementById('button_delete')
deleteButton.addEventListener('click', async (ev) => {
  ev.preventDefault()

  const idAlter = document.getElementById('delete').value

  await fetch(`http://localhost:3000/transactions/${idAlter}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const oldValueTransaction = document.getElementById(`transactionContent${idAlter}`).oldValue;
  operationBalance({ value: -parseFloat(oldValueTransaction) })
  document.getElementById('delete').value = ""
  deleteTransactions(idAlter)
})


function deleteTransactions(deleteTransactionId) {
  const transaction = document.getElementById(`transactionContent${deleteTransactionId}`)
  if (transaction) {

    transaction.remove()

  } else {
    alert('Essa transação não existe')
  }

}

async function operationBalance(operation) {
  balanceValue += parseFloat(operation.value)
  await updateBalanceInDB(); //editado
}


async function updateBalanceInDB() {
  const balance = {
    value: balanceValue
  }

  await fetch('http://localhost:3000/balance', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(balance)
  });

  updateBalanceDisplay()
}

function updateBalanceDisplay() {
  const showBalance = document.getElementById('balance')
  showBalance.innerText = balanceValue
  document.getElementById('text-balance').append(showBalance)
}

