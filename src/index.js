import "./styles.css";

const onClickAdd = () => {
  //テキストボックス内の値を取得&ボックス内初期化
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //divタグを生成
  const div = document.createElement("div");
  div.classList.add("listRow");
  //div.className = "listRow";上のやつと同じ意味
  console.log(div);

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  //divの下にliとかの子要素を追加。
  div.appendChild(li);
  console.log(div);

  //未完了の要素に追加。
  document.getElementById("incompleteList").appendChild(div);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
