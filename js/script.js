const stampButton = document.getElementById('stampButton');
const resetButton = document.getElementById('resetButton');
const stampContainer = document.querySelector('.stamp-container');
let rowCount = 0; // 行数
let stampCount = 0; // スタンプの個数を保持する変数

stampButton.addEventListener('click', () => {
  if (stampCount >= 15) {
    // スタンプの個数が15個を超えた場合はリセットする
    resetStamps();
    alert("15スタンプ達成しました!!\n500円引きのクーポンを差し上げます!");
    return;
  }

  const stamp = document.createElement('img');
  stamp.src = 'S__10952776.jpg';
  stamp.alt = 'Stamp';
  stamp.classList.add('stamp');

  const currentRow = stampContainer.querySelector(`.row-${rowCount}`);
  if (currentRow) {
    currentRow.appendChild(stamp);
  } else {
    const newRow = document.createElement('div');
    newRow.classList.add('stamp-row', `row-${rowCount}`);
    newRow.appendChild(stamp);
    stampContainer.appendChild(newRow);
  }

  if (stampContainer.scrollWidth > stampContainer.clientWidth) {
    rowCount++;
  }

  stampCount++; // スタンプの個数を増やす
});

resetButton.addEventListener('click', () => {
  resetStamps();
});

function resetStamps() {
  // スタンプをリセットする
  stampContainer.innerHTML = '';
  rowCount = 0;
  stampCount = 0;
}
