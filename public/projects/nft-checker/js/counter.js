function count(e){
    let countVal=document.getElementById("countNum").innerText
    countVal= parseInt(countVal)
    if(e=="+"){
       countVal++
        document.getElementById("countNum").innerText=countVal
    }
    if(e=="-"){
        countVal--
        if(countVal>=0){
        document.getElementById("countNum").innerText=countVal
        }
    }
}