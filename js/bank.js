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
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input 
    depositInput.value='';
  });

  // handle withdraw event handler 

  document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    // set withdraw totall 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal
    const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

        // clear withdraw input 
        withdrawInput.value = '';
  });
 