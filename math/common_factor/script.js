window.addEventListener('load' , function(){
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    const btn = document.getElementById('btn')
    const ans = document.getElementById('ans')
    let l = []

    btn.addEventListener('click' , function(){
        for(let i=1;i<=num1.value + num2.value;i++){
            if((num1.value % i == 0) && (num2.value % i == 0)){
                l.push(i)
            }
        }

        for(let i=0;i<l.length;i++){
            ans.textContent = ans.textContent + l[i] + " , "
        }

        l = []
    })
})