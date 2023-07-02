import "./styles.css";

const onClickAdd = () => {
  // text boxの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // create div tag
  const div = document.createElement("div");
  div.className = "list-row";

  // create li tag
  const li = document.createElement("li");
  li.innerText = text;

  // button(complete)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了のTodoを完了したTodoに移し，未完了のTodoから消す

    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "もどす";
    returnButton.addEventListener("click", () => {
      const returnTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(returnTarget);

      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(delete)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div tag child
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // append incomplete list
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
