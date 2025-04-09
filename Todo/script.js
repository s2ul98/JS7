// 할일 추가
function addTodo() {
  // 리스트
  const list = document.getElementById('todo-list');
  const input = document.getElementById('todo-input');
  // 사용자가 입력한 값 꺼내기
  const text = input.value; 
  // 사용자가 입력한 값이 없다면 함수를 종료
  if(text.trim == '') {
    alert('사용자가 입력한 내용이 없습니다.');
    return;
  }

  // 새로운 항목 만들기
  const li = document.createElement('li');

  // 구성 : 체크박스, 삭제버튼, 수정버튼, 입력필드
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  // 체크박스 이벤트 처리
  // 체크가 되면 완료가 된것처럼 스타일 꾸미기
  checkbox.addEventListener('change', () => {
    // 토글이벤트 처리
    li.classList.toggle('complete'); 
    countTodo(); // 체크박스의 상태가 변경됐을 때 count 세기
  });

  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.value = text; // 입력필드에 꺼낸 값으로 초기화
  textInput.disabled = true; // 수정할 수 없도록 비활성화(읽기모드)

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '삭제';
  // 삭제버튼을 클릭하면 목록에서 해당 항목을 삭제
  // 단건 삭제
  removeBtn.addEventListener('click', ()=> {
    // button을 포함하고 있는 li태그를 삭제
    li.remove();
    countTodo(); // 요소가 삭제 됐을 때 다시 count 세기
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = '수정';
  // 수정 기능 (읽기모드 -> 수정모드 변화)
  // 수정버튼을 클릭하면 입력필드가 활성화되고 버튼이 '저장'버튼으로 변경됨
  editBtn.addEventListener('click', () => {
    console.log(editBtn.textContent);
    // 버튼의 이름에 따라 모드를 전환
    if(editBtn.textContent == '수정') { // 편집보드
      textInput.disabled = false;
      editBtn.textContent = '저장';
    } else { // 읽기모드
      textInput.disabled = true;
      editBtn.textContent = '수정';
    }
  });

  li.appendChild(checkbox);
  li.appendChild(textInput);
  li.appendChild(removeBtn);
  li.appendChild(editBtn);

  list.appendChild(li);

  // 입력필드 초기화
  input.value = '';

  // todo가 추가됐을 때 count 세기
  countTodo();

}


// todo를 삭제하는 함수
function deleteAll() {

  // ul태그 안에 있는 모든 li태그 가져오기
  // querySelector : css 선택자를 사용해서 html 요소 가져오기
  // querySelectorAll : 조건을 만족하는 모든 요소를 가져오기
  const list = document.querySelectorAll('#todo-list li');
  console.log(list);
  // li 태그를 하나씩 삭제하기
  list.forEach((li) => {
    li.remove();
  });
  countTodo(); // 요소가 삭제 됐을 때 다시 count 세기
}


// todo의 총 개수와 완료된 todo의 개수를 세는 함수
// 언제 함수를 호출할까? => 1. todo를 추가할 때 / 2. todo를 삭제할 때 / 3. 일괄 삭제가 됐을 때
function countTodo() {
  // 총 개수
  const list = document.querySelectorAll('#todo-list li');
  const totalCount = list.length;
  console.log('todo의 총 개수: ', totalCount);

  // 화면에 총 개수 표시
  const span1 = document.getElementById('total-count');
  span1.textContent = totalCount;

  // 완료된 todo 세기
  // li 태그 안에 checked 확인
  // checked라는 속성을 가지고 있는지 확인
  // 속성 선택자를 사용해서 Checkbox를 찾고, 상태선택자를 사용해서 체크가 되어있는 Checkbox 찾기
  // const completeLi = ;
  const completeCheckbox = document.querySelectorAll('li input[type="checkbox"]:checked');
  const completeCount = completeCheckbox.length;

  // 화면에 완료개수 표시
  const span2 = document.getElementById('complete-count');
  span2.textContent = completeCount;
}