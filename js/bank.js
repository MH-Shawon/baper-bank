document.getElementById('deposit-btn').addEventListener('click', function(){
  // getthe amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmounText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmounText);
    
    const depoitTotall = document.getElementById('deposit-totall');
    const previousDepositText = depoitTotall.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositeTotal = previousDepositAmount+ newDepositAmount;
    depoitTotall.innerText = newDepositeTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const nebalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = nebalanceTotal;

    // clear the deposit input 
    depositInput.value='';
  });

  // handle withdraw event handler 

  document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdrw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    // set withdraw totall 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawtTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotal.innerText = newWithdrawTotal
    const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

        // clear withdraw input 
        withdrawInput.value = '';
  });
  