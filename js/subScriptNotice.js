console.log(
  `
  ㄷ
  ㅠ . . .

⠀⡠⠐⠐⠐⠀⠐⠐⠀⠂⠄
⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠈⢂
⠈⢲                     ⠐⠤⠜
⠀⢸  ●⠀⠀⠀    ●⠀⡇⠀
    ⡄⠀⠀       ⠀⠀⠀⡠⠀⠀
⠀⠀⠑⡄⣀   ᴥ⡠⠤⠊⢢⠀⠀
⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⡈⡄⠀
⠀⠀⠨⣠⠀⠀⠀⠀⠀⠀⡗⠃⠀
⠀⠀⠀⢉⠀⠀⠀⠀⠀⠀⡄⠀⠀
⠀⠀⠀ ⢇⠓⠒⠊⠉⠦⠃
`
);

let header = document.querySelector('header');
let navMenu = document.querySelector('#nav');
let navMenuTitle = document.querySelectorAll('.nav_item');

navMenu.addEventListener('mouseenter', function(){
  navMenuTitle.forEach(function(sub){
    sub.addEventListener('mouseenter', function(){
      navMenuTitle.forEach(function(on){
        on.classList.remove('on');
      })
      sub.classList.add('on');
    })
  })
})
navMenu.addEventListener('mouseleave', function(){
  navMenuTitle.forEach(function(sub){
    sub.classList.remove('on');
  })
})

let subMenu = document.querySelectorAll('.sub');
let subMenuHeight = {};

subMenu.forEach(function(sub){
  sub.style.maxHeight = 'inherit';
  let height = sub.scrollHeight;
  subMenuHeight[sub.id] = height;
  sub.style.maxHeight = '0';
});

navMenuTitle.forEach(function(sub){
  sub.addEventListener('mouseenter', function(){
    subMenu.forEach(function(height){
      height.style.maxHeight = 0;
    })
    let nav = document.getElementById(sub.dataset.nav);
    if(nav){
      nav.style.maxHeight = subMenuHeight[nav.id] + 'px';
    }
  })
})

subMenu.forEach(function(sub){
  sub.addEventListener('mouseenter', function(){
    sub.style.maxHeight = subMenuHeight[sub.id] + 'px';
  })
})
subMenu.forEach(function(sub){
  sub.addEventListener('mouseleave', function(){
    sub.style.maxHeight = 0;
  })
})

navMenu.addEventListener('mouseleave',function(){
  subMenu.forEach(function(sub){
    sub.style.maxHeight = 0;
  })
})


/* mobile nav */
document.querySelectorAll('.mnav_title').forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    let content = trigger.nextElementSibling;
    let isExpanded = trigger.classList.contains('active');

    if (isExpanded) {
      content.style.display = 'none';
      trigger.classList.remove('active');
    } else {
      document.querySelectorAll('.mnav_content').forEach(function(content) {
        content.style.display = 'none';
      });
      document.querySelectorAll('.mnav_title').forEach(function(btn) {
        btn.classList.remove('active');
      });

      content.style.display = 'block';
      trigger.classList.add('active');
    }
  });
});

document.querySelectorAll('.msub_title').forEach(function(trigger) {
trigger.addEventListener('click', function() {
let content = trigger.nextElementSibling;
let isExpanded = trigger.classList.contains('active');

if (isExpanded) {
  content.style.display = 'none';
  trigger.classList.remove('active');
} else {
  document.querySelectorAll('.msub_content').forEach(function(content) {
    content.style.display = 'none';
  });
  document.querySelectorAll('.msub_title').forEach(function(btn) {
    btn.classList.remove('active');
  });

  content.style.display = 'block';
  trigger.classList.add('active');
}
});
});


// 각 breadcrumbs_dep를 클릭하면 active가 붙음
let breadCrumbs = document.querySelectorAll('.breadcrumbs_dep');
breadCrumbs.forEach(function(bread){
  bread.addEventListener('click', function(e){
    breadCrumbs.forEach(function(b){
      if(b !== bread){
      b.classList.remove('active')
    };
    });
      bread.classList.toggle('active');
      e.stopPropagation();
  });
});

document.addEventListener('click', function(){
  breadCrumbs.forEach(function(b){
    b.classList.remove('active');
  });
});

//dropdown button
let dropdownSubBtn = document.querySelectorAll('.dropdown_sub');

dropdownSubBtn.forEach(function(down){
  down.addEventListener('click', function(e){
    dropdownSubBtn.forEach(function(d){
      if(d !== down){
        d.classList.remove('active')
      }
    });
    down.classList.toggle('active');
    e.stopPropagation();
  });
});

  document.addEventListener('click', function(e) {
    dropdownSubBtn.forEach(function(d) {
      d.classList.remove('active');
    });
  });

//dropdown sub 선택하면 선택한 걸로 글자 바뀌게
let subPage = document.querySelectorAll('.page');
subPage.forEach(function(select){
  select.addEventListener('click', function(){
    let dropdown = document.querySelector('.dropdown_sub:nth-child(1) p');
    dropdown.textContent = `${select.dataset.page}개씩 보기`;
  })
})

let subOption = document.querySelectorAll('.option');
subOption.forEach(function(select){
  select.addEventListener('click', function(){
    let dropdown = document.querySelector('.dropdown_sub:nth-child(2) p');
    dropdown.textContent = select.dataset.option;
  })
})

/* notice */
let rowsPerPage = 10; //1페이지에 보여줄 리스트 수 (고정)
let rows = document.querySelectorAll('#notice li'); //총 몇 줄인지 셀 리스트 선언
let rowsCount = rows.length; //해당 리스트 몇 줄인지 계산
let pageCount = Math.ceil(rowsCount / rowsPerPage); //페이지네이션 몇 개 나오는지 계산(정수, 올림)
let pageNumber = document.querySelector('#pagenation'); //페이지네이션 번호 넣을 자리 선언
let currentIdx = 0; // 현재 페이지 번호
let maxPageNum = 10; //한 번에 표시할 페이지네이션 개수

//rowsPerPage에 dataset.page의 선택된 값을 넣자

/* function changeRowsPerPage(){
  subPage.forEach(function(select){
    select.addEventListener('click', function(){
      rowsPerPage = parseInt(select.dataset.page);
    })
  })
};
changeRowsPerPage();
 */

//pagenation 좌우 버튼
let startBtn = document.querySelector('.pagenation_start');
let prevBtn = document.querySelector('.pagenation_prev');
let nextBtn = document.querySelector('.pagenation_next');
let endBtn = document.querySelector('.pagenation_end');

//페이지네이션을 만들자
function createPagination() {
  pageNumber.innerHTML = ''; // 페이지네이션 초기화
  for (let i = 1; i <= pageCount; i++) {
    pageNumber.innerHTML += `<li><a href="">${i}</a></li>`;
  }

  // 페이지 버튼 클릭 이벤트 추가
  let pageBtn = pageNumber.querySelectorAll('a');
  pageBtn.forEach((item, idx) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      displayRow(idx); // 페이지네이션 클릭 시 해당 페이지 보여줌
    });
  });

  displayRow(0); // 초기 로드 시 첫 페이지 표시
}

// 행 표시 함수
function displayRow(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowArray = Array.from(rows); // rows를 array로 변환

  // 모든 행을 숨기고 새로운 행만 보여줌
  rowArray.forEach(ra => ra.style.display = 'none');
  let newRows = rowArray.slice(start, end);
  newRows.forEach(nr => nr.style.display = '');

  // 현재 페이지에 active 클래스 추가
  let pageBtn = pageNumber.querySelectorAll('a');
  pageBtn.forEach(pb => pb.classList.remove('active'));
  pageBtn[idx].classList.add('active');
  currentIdx = idx; // 현재 페이지 번호 업데이트
  let pagenationTotal = document.querySelector('#pagenation_mobile');
  pagenationTotal.innerHTML = `<li>${currentIdx + 1}</li><li><span>/</span></li><li>${pageCount}</li>`; // 총 페이지 수
}

// 페이지네이션 이동 (한 칸씩 이동)
function movePagination(step) {
  let newIdx = currentIdx + step;

  // 페이지 범위 안에서만 이동
  if (newIdx >= 0 && newIdx < pageCount) {
    displayRow(newIdx);
  }
}

// 초기 로드 시 페이지네이션 생성
createPagination();

// 좌우 버튼 클릭 이벤트 (한 칸씩 이동)
prevBtn.addEventListener('click', function () {
  movePagination(-1); // 이전 페이지로 한 칸 이동
});

nextBtn.addEventListener('click', function () {
  movePagination(1); // 다음 페이지로 한 칸 이동
});

// 제일 처음으로 가는 버튼
startBtn.addEventListener('click', function () {
  displayRow(0); // 첫 페이지로 이동
});

// 제일 마지막으로 가는 버튼
endBtn.addEventListener('click', function () {
  displayRow(pageCount - 1); // 마지막 페이지로 이동
});


// 총 몇 개인지 삽입
let total = document.querySelector('.list_total');
total.innerHTML = `<span>총 <b>${rowsCount}</b>건</span>`;  


// 모바일 페이지네이션
/* let pagenationTotal = document.querySelector('#pagenation_mobile');
pagenationTotal.insertAdjacentHTML('afterbegin', `<li>${currentIdx}</li>`); // 페이지 번호 별로 늘어나게
pagenationTotal.insertAdjacentHTML('beforeend', `<li>${pageCount}</li>`); // 총 페이지 수
 */

/* survey */
function getSubmit(){
  let survey = document.getElementsByName('survey');

  survey.forEach(function(e){
    if(e.checked){
      alert(`응답이 제출되었습니다.
응답 내용: ${e.value}`)
    }
  })
}

let dropdownBtn = document.querySelectorAll('.family_site .dropdown');

dropdownBtn.forEach(function(down){
  down.addEventListener('click', function(e){
    dropdownBtn.forEach(function(d){
      if(d !== down){
        d.classList.remove('active')
      }
    });
    down.classList.toggle('active');
    e.stopPropagation();
  });
});

  document.addEventListener('click', function(e) {
    dropdownBtn.forEach(function(d) {
      d.classList.remove('active');
    });
  });

let topBtn = document.querySelector('.top_btn');
let footerHeight = document.querySelector('footer');

window.addEventListener('scroll',function(){
  if(window.pageYOffset >= 600){
    topBtn.classList.add('active');
  }else{
    topBtn.classList.remove('active');
  }
})

/* window scroll lock */

let closeBtn = document.querySelector('.close_svg');
let openBtn = document.getElementsByClassName('hamburger_svg')[0];
let mobileNav = document.querySelector('.mobile_nav');
let body = document.querySelector('body');

closeBtn.addEventListener('click', function(){
mobileNav.classList.remove('active');
body.classList.remove('scroll_lock');
})

openBtn.addEventListener('click',function(){
mobileNav.classList.add('active');
body.classList.add('scroll_lock');
})

