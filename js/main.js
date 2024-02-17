var elInp1 =document.querySelector('.inp1')

function fn(){
    var gap =elInp1.value
    if(gap == gap.trim()){
        console.log('probel yoq')
    }
    else{
        console.log('probel bor')
    }
}