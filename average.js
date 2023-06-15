function solution(numbers) {
    const redu = (a,b) => a+b
    const addNumber = numbers.reduce(redu)
    const answer = addNumber/numbers.length
        if(String(answer).includes(".5")){
            return answer
        }
        else if(!String(answer).includes(".")){
            return answer+".0"
        }
        else{
            return;
        }
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]))
