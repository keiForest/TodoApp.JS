import "./styles.css";

const onClickAdd = () => {
  //テキストボックス内の値を取得&ボックス内初期化
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //divタグを生成
  const div = document.createElement("div");
  div.classList.add("listRow");
  //div.className = "listRow";上のやつと同じ意味

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了buttonを生成。
  const completeButton = document.createElement("button");

  completeButton.innerText = "完了";
  const returnButton = document.createElement("Button");
  completeButton.addEventListener("click", () => {
    //完了ボタンが押されたら、ボタンの親要素のdivごと削除&完了リストに追加。
    const completeTarget = completeButton.parentNode;
    returnButton.innerText = "戻す";
    document.getElementById("completeList").appendChild(li);
    document.getElementById("completeList").appendChild(returnButton);
    document.getElementById("incompleteList").removeChild(completeTarget); //配下のものを削除。
  });

  returnButton.addEventListener("click", () => {
    const returnTarget = returnButton.parentNode;
    document.getElementById("incompleteList").appendChild(li);
    document.getElementById("incompleteList").appendChild(completeButton);
    document.getElementById("incompleteList").appendChild(deleteButton);
  });

  //削除buttonを生成。
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンが押されたら、ボタンの親要素のdivごと削除する処理
    const deleteTarget = deleteButton.parentNode; //親要素を指定。
    document.getElementById("incompleteList").removeChild(deleteTarget); //配下のものを削除。
  });

  //divの下にliとかの子要素を追加。
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  //未完了の要素に追加。
  document.getElementById("incompleteList").appendChild(div);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
