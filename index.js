let cnt=0
function increment(){
    cnt=cnt+1
    document.getElementById('count').innerHTML=cnt
}
function save(){
    let countstr=cnt+" - "
    document.getElementById('log').textContent+=countstr
    document.getElementById('count').innerHTML=cnt
    cnt=0
    document.getElementById('count').innerHTML=cnt
}