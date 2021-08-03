import "./styles.css";

const onClickAdd = () => {
  // テキストの値取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了リストに追加
  createIncompleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  // 押された削除ボタンの親タグを削除
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する対象を取得
    const addTaret = completeButton.parentNode;
    const text = addTaret.firstElementChild.innerText;

    // div初期化
    addTaret.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを削除
      const deleteTaret = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTaret);
      const text = deleteTaret.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divに子要素を追加
    addTaret.appendChild(li);
    addTaret.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTaret);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグに子要素追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
