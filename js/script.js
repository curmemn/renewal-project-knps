console.log(
  `

            ㄷ
            ㅠ . . .
          
⠀⡠⠐⠐⠐⠀⠐⠐⠀⠂⠄
⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠈⢂
⠈⢲⠨                ⠐⠤⠜
⠀⢸  ●⠀⠀⠀    ●⠀⡇⠀
    ⡄⠀⠀       ⠀⠀⠀⡠⠀⠀
⠀⠀⠑⡄⣀   ᴥ⡠⠤⠊⢢⠀⠀
⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⡈⡄⠀
⠀⠀⠨⣠⠀⠀⠀⠀⠀⠀⡗⠃⠀
⠀⠀⠀⢉⠀⠀⠀⠀⠀⠀⡄⠀⠀
⠀⠀⠀⠀⢇⠓⠒⠊⠉⠦⠃

`
);


let header = document.querySelector('header');
let navMenu = document.querySelector('#nav');
let navMenuTitle = document.querySelectorAll('.nav_item');
let navMenuColor = document.querySelectorAll('.nav_menu a');
let svgHamburger1 = document.querySelector('.ham1');
let svgHamburger2 = document.querySelector('.ham2');
let headerLogo = document.querySelector('.header_logo');
let headerText = document.querySelectorAll('.header_text a');

let clickBtn = document.querySelector('.nav_item:nth-child(3) .click_btn');

/* 헤더 마우스 올렸을 때 헤더만 배경 화이트 */
header.addEventListener('mouseenter', function(){
  this.style.backgroundColor = 'var(--white)';
  headerLogo.src = "image/logo_black.png";
  headerText.forEach(function(color){
    color.style.color = 'var(--black1)';
  })
  navMenu.style.backgroundColor = 'var(--white)';
  navMenuColor.forEach(function(color){
    color.style.color = 'var(--black1)';
  })
  svgHamburger1.setAttribute('fill', 'var(--black1)');
  svgHamburger2.setAttribute('fill', 'var(--black1)');
  clickBtn.style.filter = 'none';
});

/* 헤더 마우스 뗐을 때 */
header.addEventListener('mouseleave', function (){
  this.style.backgroundColor = '';
  headerLogo.src = "image/logo_white.png";
  headerText.forEach(function(color){
    color.style.color = '';
  })
  navMenu.style.backgroundColor = '';
  navMenuColor.forEach(function(color){
    color.style.color = '';
  })
  svgHamburger1.setAttribute('fill', 'var(--white)');
  svgHamburger2.setAttribute('fill', 'var(--white)');
  clickBtn.style.filter = '';
});


/* 내비게이션 전체 마우스 올렸을 때 배경 화이트 */
navMenu.addEventListener('mouseenter', function(){
  header.style.backgroundColor = 'var(--white)';
  headerLogo.src = "image/logo_black.png";
  headerText.forEach(function(color){
    color.style.color = 'var(--black1)';
  })
  navMenu.style.backgroundColor = 'var(--white)';
  navMenuColor.forEach(function(color){
    color.style.color = 'var(--black1)';
  })
  svgHamburger1.setAttribute('fill', 'var(--black1)');
  svgHamburger2.setAttribute('fill', 'var(--black1)');
    clickBtn.style.filter = 'none';
})

/* 내비게이션 마우스 뗐을 때 */
navMenu.addEventListener('mouseleave', function(){
  header.style.backgroundColor = '';
  headerLogo.src = "image/logo_white.png";
  headerText.forEach(function(color){
    color.style.color = '';
  })
  navMenu.style.backgroundColor = '';
  navMenuColor.forEach(function(color){
    color.style.color = '';
  })
  svgHamburger1.setAttribute('fill', 'var(--white)');
  svgHamburger2.setAttribute('fill', 'var(--white)');
    clickBtn.style.filter = '';
})


/* 내비게이션 호버 밑줄 추가 */

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

/* park_introduce 버튼 클릭 시 글자 출력 */
let parkBtn = document.querySelectorAll('.park_btn');
let parkText = document.querySelectorAll('.text_wrap');

for(let i = 0; i < parkBtn.length; i++){
parkBtn[i].addEventListener('click', function (){
  parkBtn.forEach(function(btn){
    btn.classList.remove('active');
  })
  this.classList.add('active');
  parkText.forEach(function(text){
    text.classList.remove('active');
  })
    parkText[i].classList.add('active');
})
};

/* 새소식 탭메뉴 */
/* dataset.tab 클릭시 매칭되는 tab1 tab2 선택됨 */

let tabBtns = document.querySelectorAll('.tab_btn'); //상단 탭버튼
let tabContents = document.querySelectorAll('.tab_content'); //탭 내용(표)

tabBtns.forEach(function(tab){
  tab.addEventListener('click',function(e){
  e.preventDefault();
  tabBtns.forEach(function(t){
    t.classList.remove('active');
  })
  tab.classList.add('active');
  tabContents.forEach(function(c){
    c.classList.remove('active');
  })
  let tabId = this.dataset.tab;
  document.getElementById(`${tabId}`).classList.add('active');
  })
})


/* 둘러보기 각 browse 클릭 시 active 추가 */

let browse = document.querySelectorAll('.browse');

browse.forEach(function(b){
  b.addEventListener('click', function(e){
    e.preventDefault();
    browse.forEach(function(br){
      br.classList.remove('active');
    })
    b.classList.add('active');
  })
})

/* sns 탭메뉴 */

let snsTab = document.querySelectorAll('.sns_tab');
let snsContent = document.querySelectorAll('.sns_content');

snsTab.forEach(function(tab){
  tab.addEventListener('click',function(){
  snsTab.forEach(function(t){
    t.classList.remove('active');
  });
  tab.classList.add('active');
  snsContent.forEach(function(c){
    c.classList.remove('active');
  });
  let snsId = this.dataset.sns;
  document.getElementById(`${snsId}`).classList.add('active');
  });
});

/* a #none 상단 이동 방지 */
/* let aTag = document.querySelectorAll('a');

aTag.forEach(function(a){
  a.addEventListener('click',function(e){
    e.preventDefault();
  });
}); */

/* 각각 주려면 이렇게 */
/* snsContent.forEach(function(content){
  content.querySelectorAll('a').forEach(function(stop){
    stop.addEventListener('click', function(e){
      e.preventDefault();
    });
  });
}); */

/* 드롭다운 누르면 각각 보이게 */
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

  /* top btn */
  let topBtn = document.querySelector('.top_btn');
  let footerHeight = document.querySelector('footer');
  
  window.addEventListener('scroll',function(){
    if(window.pageYOffset >= 600){
      topBtn.classList.add('active');
    }else{
      topBtn.classList.remove('active');
    }
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