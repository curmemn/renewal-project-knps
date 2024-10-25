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


/* dropdown 버튼 */
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

let subOption = document.querySelectorAll('.option');
subOption.forEach(function(select){
  select.addEventListener('click', function(){
    let dropdown = document.querySelector('.dropdown_sub p');
    dropdown.textContent = select.dataset.option;
  })
})


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



/* park filter */
const data = [
  {id: 1, round: "22", award: "대상", parkname: "설악산", title: "가을로 가는 길", url: "image/gallery/22-1.jpg"},
  {id: 2, round: "22", award: "최우수", parkname: "다도해해상", title: "다도해 몽돌 은하수 풍경", url: "image/gallery/22-2.jpg"},
  {id: 3, round: "22", award: "우수", parkname: "속리산", title: "봄의 향연", url: "image/gallery/22-3.jpg"},
  {id: 4, round: "22", award: "우수", parkname: "북한산", title: "도봉산 흰소나무", url: "image/gallery/22-4.jpg"},
  {id: 5, round: "22", award: "장려", parkname: "속리산", title: "여명빛 산그리메", url: "image/gallery/22-5.jpg"},
  {id: 6, round: "22", award: "장려", parkname: "내장산", title: "우화정의 설경", url: "image/gallery/22-6.jpg"},
  {id: 7, round: "22", award: "장려", parkname: "무등산", title: "구비구비 흘러흘러", url: "image/gallery/22-7.jpg"},
  {id: 8, round: "22", award: "장려", parkname: "가야산", title: "가야폭포", url: "image/gallery/22-8.jpg"},
  {id: 9, round: "21", award: "대상", parkname: "월악산", title: "자연 수묵화", url: "image/gallery/21-1.jpg"}, 
  {id: 10, round: "21", award: "최우수", parkname: "설악산", title: "설악 별 헤는 밤", url: "image/gallery/21-2.jpg"}, 
  {id: 11, round: "21", award: "우수", parkname: "내장산", title: "백양사 가는 길", url: "image/gallery/21-3.jpg"}, 
  {id: 12, round: "21", award: "우수", parkname: "한려해상", title: "파도소리", url: "image/gallery/21-4.jpg"}, 
  {id: 13, round: "21", award: "우수", parkname: "다도해해상", title: "반딧불이 향연", url: "image/gallery/21-5.jpg"}, 
  {id: 14, round: "21", award: "우수", parkname: "설악산", title: "설악산 바람꽃", url: "image/gallery/21-6.jpg"}, 
  {id: 15, round: "21", award: "장려", parkname: "설악산", title: "울산별밤", url: "image/gallery/21-7.jpg"}, 
  {id: 16, round: "21", award: "장려", parkname: "주왕산", title: "절골 물돌이", url: "image/gallery/21-8.jpg"},
  {id: 17, round: "20", award: "대상", parkname: "태백산", title: "미지의 겨울왕국", url: "image/gallery/20-1.jpg"},
  {id: 18, round: "20", award: "최우수", parkname: "한려해상", title: "소병대도와 은하수", url: "image/gallery/20-2.jpg"},
  {id: 19, round: "20", award: "우수", parkname: "한려해상", title: "남해 한려해상에서", url: "image/gallery/20-3.jpg"},
  {id: 20, round: "20", award: "우수", parkname: "덕유산", title: "사진가의 겨울", url: "image/gallery/20-4.jpg"},
  {id: 21, round: "20", award: "우수", parkname: "속리산", title: "속리산 문장대의 아침", url: "image/gallery/20-5.jpg"},
  {id: 22, round: "20", award: "우수", parkname: "북한산", title: "바위동굴 속의 일출", url: "image/gallery/20-6.jpg"},
  {id: 23, round: "20", award: "우수", parkname: "가야산", title: "가야산 풍경", url: "image/gallery/20-7.jpg"},
  {id: 24, round: "20", award: "장려", parkname: "북한산", title: "북한산 해넘이", url: "image/gallery/20-8.jpg"},
  {id: 25, round: "19", award: "대상", parkname: "설악산", title: "승천", url: "image/gallery/19-1.jpg"},
  {id: 26, round: "19", award: "최우수", parkname: "가야산", title: "비내리는 해인사", url: "image/gallery/19-2.jpg"},
  {id: 27, round: "19", award: "최우수", parkname: "속리산", title: "문장대에 진달래 필 때", url: "image/gallery/19-3.jpg"},
  {id: 28, round: "19", award: "우수", parkname: "지리산", title: "쌍계사의 가을", url: "image/gallery/19-4.jpg"},
  {id: 29, round: "19", award: "우수", parkname: "한려해상", title: "참나리와 대소병대도", url: "image/gallery/19-5.jpg"},
  {id: 30, round: "19", award: "우수", parkname: "오대산", title: "월정사에 눈은 내리고", url: "image/gallery/19-6.jpg"},
  {id: 31, round: "19", award: "우수", parkname: "월악산", title: "깊고푸른밤", url: "image/gallery/19-7.jpg"},
  {id: 32, round: "19", award: "우수", parkname: "월출산", title: "월출산의 봄", url: "image/gallery/19-8.jpg"},
  {id: 33, round: "18", award: "대상", parkname: "소백산", title: "소백 연화봉 별밤", url: "image/gallery/18-1.jpg"},
  {id: 34, round: "18", award: "최우수", parkname: "경주", title: "삼릉아침", url: "image/gallery/18-2.jpg"},
  {id: 35, round: "18", award: "최우수", parkname: "변산반도", title: "푸른 적벽강의 여름", url: "image/gallery/18-3.jpg"},
  {id: 36, round: "18", award: "우수", parkname: "가야산", title: "눈내리는 해인사", url: "image/gallery/18-4.jpg"},
  {id: 37, round: "18", award: "우수", parkname: "경주", title: "황혼속의 안식", url: "image/gallery/18-5.jpg"},
  {id: 38, round: "18", award: "우수", parkname: "북한산", title: "자운봉환타지", url: "image/gallery/18-6.jpg"},
  {id: 39, round: "18", award: "우수", parkname: "설악산", title: "신선대 노을빛", url: "image/gallery/18-7.jpg"},
  {id: 40, round: "18", award: "우수", parkname: "월출산", title: "월출산", url: "image/gallery/18-8.jpg"},
];


/* gallery 회차 버튼 */
// 이미지 업데이트
function updateImageRound(filteredData){
  let roundImage = document.querySelector('.gallery_content');

  roundImage.innerHTML = '';

  filteredData.forEach(item => {
    let createDiv = document.createElement('div');
    createDiv.classList.add('gallery_item');
    createDiv.innerHTML = `
    <img src="${item.url}" alt="${item.parkname}-${item.title}">
    <div class="item_detail">
      <span>제${item.round}회 일반부문 ${item.award} &#124; ${item.parkname}</span>
      <p>${item.title}</p>
    </div>
    `;
    roundImage.appendChild(createDiv);
  })
}

//탭(체크박스) 업데이트-
let roundGalleryTab = document.getElementById('round_tab');

roundGalleryTab.addEventListener('change', () => {
  let selectedRound = Array.from(document.querySelectorAll('#round_tab input[type="checkbox"]:checked'))
  .map(tab => tab.getAttribute('data-round')); //선택된 항목을 저장
  let filteredData = data.filter(item => selectedRound.includes(item.round));
  updateImageRound(filteredData);
  if(selectedRound.length === 0){
    let roundImage = document.querySelector('.gallery_content');
    roundImage.innerHTML = '<div class="not_display">감상할 회차를 선택해주세요.</div>'
  }
})

//전체선택 버튼 기능

let checkedRoundSelectBtn = document.querySelectorAll('#round_tab input[type="checkbox"]');
let selectAllRound = document.querySelector('#round_select .select_all');

selectAllRound.addEventListener('click', () => {
  checkedRoundSelectBtn.forEach(selected => {selected.checked = true;
  });
  let filteredData = data; //전체 선택
  updateImageRound(filteredData);
});

//전체해제 버튼 기능
let selectDeleteRound = document.querySelector('#round_select .select_delete');

selectDeleteRound.addEventListener('click', () => {
  checkedRoundSelectBtn.forEach(selected => {selected.checked = false;
  })
  let roundImage = document.querySelector('.gallery_content');
  roundImage.innerHTML = '<div class="not_display">감상할 회차를 선택해주세요.</div>';
})


updateImageRound(data.filter(item => item.round === '22'));


/* gallery 공원 버튼 */
function updateImagePark(filteredData){
  let parkImage = document.querySelector('.gallery_content');

  parkImage.innerHTML = '';

  filteredData.forEach(item => {
    let createDiv = document.createElement('div');
    createDiv.classList.add('gallery_item');
    createDiv.innerHTML = `
    <img src="${item.url}" alt="${item.parkname}-${item.title}">
    <div class="item_detail">
      <span>제${item.round}회 일반부문 ${item.award} &#124; ${item.parkname}</span>
      <p>${item.title}</p>
    </div>
    `;
    parkImage.appendChild(createDiv);
  })
}

//탭(체크박스) 업데이트 
let parkGalleryTab = document.getElementById('parkname_tab');

parkGalleryTab.addEventListener('change', () => {
  let selectedPark = Array.from(document.querySelectorAll('#parkname_tab input[type="checkbox"]:checked'))
  .map(tab => tab.getAttribute('data-parkname')); //선택된 항목을 저장
  let filteredData = data.filter(item => selectedPark.includes(item.parkname));
  updateImagePark(filteredData);
  if(selectedPark.length === 0){
    let roundImage = document.querySelector('.gallery_content');
    roundImage.innerHTML = '<div class="not_display">감상할 회차를 선택해주세요.</div>'
  }
})

//전체선택 버튼 기능

let checkedParkSelectBtn = document.querySelectorAll('#parkname_tab input[type="checkbox"]');
let selectAllPark = document.querySelector('#parkname_select .select_all');

selectAllPark.addEventListener('click', () => {
  checkedParkSelectBtn.forEach(selected => {selected.checked = true;
  });
  let filteredData = data; //전체 선택
  updateImagePark(filteredData);
});

//전체해제 버튼 기능
let selectDeletePark = document.querySelector('#parkname_select .select_delete');

selectDeletePark.addEventListener('click', () => {
  checkedParkSelectBtn.forEach(selected => {selected.checked = false;
  })
  let parkImage = document.querySelector('.gallery_content');
  parkImage.innerHTML = '<div class="not_display">감상할 회차를 선택해주세요.</div>';
})




/* cursor not allowed */
let roundTabCursorSet = document.querySelectorAll('#round_tab .tab_label');
for(let i = 0; i < 18; i++){
  roundTabCursorSet[i].querySelector('span').style.cursor = "not-allowed";
  roundTabCursorSet[i].querySelector('span').style.border = "1px solid var(--gray2)";
  roundTabCursorSet[i].querySelector('span').style.backgroundColor = "var(--gray5)";
  roundTabCursorSet[i].querySelector('span').style.color = "var(--gray3)";
}

/* gallery tab onclick */
let roundFilter = document.querySelector('.round_filter');
let parkFilter = document.querySelector('.park_filter');
let roundWrap = document.querySelector('.round_wrap');
let parkWrap = document.querySelector('.parkname_wrap');


//roundfilter onclick 함수
function galleryTabClickToLeft() {
  roundFilter.classList.remove('move_right');
  roundFilter.classList.add('move_left');
  parkFilter.classList.remove('move_left');
  parkFilter.classList.add('move_right');
  roundWrap.classList.add('active');
  parkWrap.classList.remove('active');
}

//parkfilter onclick 함수
function galleryTabClickToRight() {
  roundFilter.classList.remove('move_left');
  roundFilter.classList.add('move_right');
  parkFilter.classList.remove('move_right');
  parkFilter.classList.add('move_left');
  parkWrap.classList.add('active');
  roundWrap.classList.remove('active');
}

/* search 총 개수*/
document.querySelector('.gallery_total').innerHTML = `<span class="gallery_total">총 <b>${data.length}</b>건</span>`;
