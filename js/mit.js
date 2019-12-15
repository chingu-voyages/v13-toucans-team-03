/*Code credit: JavaScript30 by WesBos-tutorial 15 LocalStorage and Event Delegation
visit https://github.com/ming-yong/JS30-15-taco-list for more detail
*/
const mitForm = document.querySelector(".mit_form");
const mitList = document.querySelector(".mit_list");
let mitJSList = JSON.parse(localStorage.getItem("items")) || [];
const mitText = document.querySelector(".mit_text");

function addItem(e) {
	e.preventDefault(); //stop the page from refreshing
	const input = this.querySelector("[name=item]").value;//users input
	const item = {
		input,
		done: false,
		delete: false
  };
  if(mitJSList.length<3){
    mitJSList.push(item);
    populateList(mitJSList, mitList);
    localStorage.setItem("items", JSON.stringify(mitJSList));
    this.reset();
  }else{
    mitText.textContent="Focus on three, add more when done.";
  }
}

function populateList(mitJSList = [], mitList) {
	mitList.innerHTML = mitJSList
		.map((item, index) => {
			return `
			<li>
				<input type="checkbox" data-index=${index} id="item${index}" ${item.done ? "checked" : ""}/>
				<label for="item${index}">${item.input}</label>
				<button class="btn_delete" type="button" data-index=${index}>❌</button>
			</li>
		`;
		})
		.join("");
}

//event delegation
function toggleDone(e) {
	if (!e.target.matches("input")) return; //skip this unless it is an input
	const element = e.target;
	const index = element.dataset.index;
	mitJSList[index].done = !mitJSList[index].done;
	localStorage.setItem("items", JSON.stringify(mitJSList));
	populateList(mitJSList, mitList);
}

function deleteItem(e) {
	if (!e.target.matches("button")) return; //skip this unless it is a button
	const element = e.target;
	const index = element.dataset.index;
	mitJSList[index].delete = !mitJSList[index].delete;
	mitJSList = mitJSList.filter(item => !item.delete);
	localStorage.setItem("items", JSON.stringify(mitJSList));
	populateList(mitJSList, mitList);
}

mitForm.addEventListener("submit", addItem);
mitList.addEventListener("click", toggleDone);
mitList.addEventListener("click", deleteItem);
populateList(mitJSList, mitList);