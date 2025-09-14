const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price")

	let price1 = []
	prices.forEach((ele)=>{
		price1.push(Number(ele.textContent))
	})
	console.log(price1)
	
	let sum = price1.reduce((acc, curr)=>{
		return acc + curr
	},0)

	let table = document.querySelector("table")
	let lastRow = document.createElement(`tr`)
	lastRow.innerHTML = `<td id = "ans"> ${sum} </td>`
	table.appendChild(lastRow)
	
};

getSumBtn.addEventListener("click", getSum);

