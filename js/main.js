var isPopupOn = false;

$(function() {
	var wheelScroll="noPop";
	var scrollTarget = $('body,html');
	var deltaWaling="next";
	var scrollLeft = 0;
	scrollTarget.mousewheel(function(event, delta){
  		if(isPopupOn) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}
		if(!(navigator.appVersion.indexOf("Mac")!=-1)) {

			if(wheelScroll=="noPop"){
				$(this).stop().animate({scrollLeft: (this.scrollLeft-(delta * 300))}, 2000,"linear");
			} else{
				if(delta<0) {$(".popup").stop().animate({scrollTop:"+=200"},100); deltaWaling="next"; }
					else {$(".popup").stop().animate({scrollTop:"-=200"},100); deltaWaling="prev"}
				}
				event.preventDefault();
			} else if (navigator.appVersion.indexOf("Mac")!=-1   ){
				if(wheelScroll=="noPop"){
					$(this).stop().animate({scrollLeft: (this.scrollLeft-(delta * 600 / 60 ))}, 1000,"linear");
				} else{
					if(delta<0) { $(".popup").stop().animate({scrollTop: "+=200"}, 100); deltaWaling="next" }
					else { $(".popup").stop().animate({scrollTop: "-=200"}, 100); deltaWaling="prev" }
				}
				event.preventDefault();
	 		}	 
  		});

	/*
		Scene이 바뀌는 인덱스 계산
		Scene 크기가 정해지면 수정 
	*/
	var bgWidth = 6920;
	var sceneNum = 4;
  	var baseIdx = bgWidth / sceneNum;
  	var scrollIdx = [];

  	/*for(var i=0;i<sceneNum+1;i++) {
  		scrollIdx.push(baseIdx * i);
  	}*/
  	scrollIdx.push(0);
  	scrollIdx.push(1800);
  	scrollIdx.push(3600);
  	scrollIdx.push(5000);
  	scrollIdx.push(6920);

  	scrollBtnOn($(window).scrollLeft());

  	$('.buttons > .btn > li').each(function(idx) {
  		$(this).click(function() {
  			$('body, html').stop().animate({scrollLeft: scrollIdx[idx]}, 500);
  		});
  	});


	// //////////////////////////////////////////////////////////////////////
	// 팝업
	// 닫기버튼
	$(".pop_close").click(function(){
		isPopupOn = false;
		$(".pop1,.pop2,.pop3,.pop4,.pop5")
		.animate({top:"-1000px"}, 300,function(){
			$(".pop1,.pop2,.pop3,.pop4,.pop5,.pop01_wrapper1,.pop01_wrapper2").addClass("noshow");
		});
		$(".pop_bg").fadeOut(500).addClass("noshow");
		return;
	})
	

	// 팝업1 -1
	$(".pop1 >.pop_nav > ul >li:nth-child(1)").click(function(){
		isPopupOn = true;
		$(".pop01_wrapper1")
		.removeClass("noshow");
		$(".pop01_wrapper2")
		.addClass("noshow");
		$(".pop_nav > ul > .pop01_btn1")
		.addClass("on");
		$(".pop_nav > ul > .pop01_btn2")
		.removeClass("on");
	})
	// 팝업1-2
	$(".pop1 >.pop_nav > ul >li:nth-child(2)").click(function(){
		isPopupOn = true;
		$(".pop01_wrapper2")
		.removeClass("noshow");
		$(".pop01_wrapper1")
		.addClass("noshow");
		$(".pop_nav > ul > .pop01_btn2").addClass("on");
		$(".pop_nav > ul > .pop01_btn1").removeClass("on");
	})

	// 밤도깨비 야시장 맨처음 문열고 자세히보기
	$(".bd01").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop1")
		.removeClass("noshow")
		.animate({top:"0px"}, 600);
		$(".pop01_wrapper1").removeClass("noshow");
		$(".pop01_wrapper2").addClass("noshow");
		$(".pop_nav > ul > .pop01_btn1").addClass("on");
		$(".pop_nav > ul > .pop01_btn2").removeClass("on");
	})
	// 캐릭터소개 컨테이너 클릭
	$(".con01").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop1 .pop01_wrapper1").addClass("noshow");
		$(".pop1 .pop01_wrapper2").removeClass("noshow");
		$(".pop01_btn1").removeClass("on");
		$(".pop01_btn2").addClass("on");
		$(".pop1").removeClass("noshow").animate({top:"0px"}, 600);
	})

	// 문화비축기지 트럭 클릭시
	$(".truck01_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop2,.pop02_wrapper1").removeClass("noshow");
		$(".pop2").animate({top:0}, 600);
		$(".pop3,.pop4,.pop5,pop02_wrapper2,pop02_wrapper3").addClass("noshow");
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$('#element').on('scroll mousewheel', function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		  // return false;
		});
	})
	
	// 여의도 트럭 클릭
	$(".truck02_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop3,.pop03_wrapper1").removeClass("noshow");
		$(".pop3").animate({top:0}, 600);
		$(".pop2,.pop4,.pop5").addClass("noshow");
	})
	// 청계천트럭 클릭
	$(".truck03_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop4,.pop04_wrapper1").removeClass("noshow");
		$(".pop4").animate({top:0}, 600);
		$(".pop3,.pop2,.pop5").addClass("noshow");
	})
	// DDP 트럭 클릭
	$(".truck04_h").click(function(){
		isPopupOn = true;
		$(".pop_bg").fadeIn(600).removeClass("noshow");
		$(".pop5,.pop05_wrapper1").removeClass("noshow");
		$(".pop5").animate({top:0}, 600);
		$(".pop3,.pop4,.pop2").addClass("noshow");
	})


  	$(window).scroll(function() {
  		
  		scrollLeft = $(window).scrollLeft();
  		//console.log(scrollLeft);
  		/*
  			scroll에 따른 메뉴 활성화
  		*/
  		scrollBtnOn(scrollLeft);
    });

    $('.sns > ul > .icon01').click(function() {
    	window.open('./game.html', '_blank');
    });

    $('#map1').css('z-index', 1000);

    var map1 = document.getElementById('map1');
    var map2 = document.getElementById('map2');
    var map3 = document.getElementById('map3');
    var map4 = document.getElementById('map4');

    var options1 = {
    	center: new daum.maps.LatLng(37.5709900,126.89413200000001),
    	level: 4
    };

    var options2 = {
    	center: new daum.maps.LatLng(37.5308161,126.9283643),
    	level: 4
    };

    var options3 = {
    	center: new daum.maps.LatLng(37.5691135,126.98116449999998),
    	level: 4
    };

    var options4 = {
    	center: new daum.maps.LatLng(37.566725,127.00950599999999),
    	level: 4
    };

    var map1 = new daum.maps.Map(map1, options1);
    var map2 = new daum.maps.Map(map2, options2);
    var map3 = new daum.maps.Map(map3, options3);
    var map4 = new daum.maps.Map(map4, options4);

    // 마커가 표시될 위치입니다 
	var markerPosition1  = new daum.maps.LatLng(37.5709900,126.89313200000001); 
	var markerPosition2  = new daum.maps.LatLng(37.5308161,126.9283643);
	var markerPosition3  = new daum.maps.LatLng(37.5691135,126.98116449999998);
	var markerPosition4  = new daum.maps.LatLng(37.566725,127.00950599999999);

	// 마커를 생성합니다
	var marker1 = new daum.maps.Marker({
	    position: markerPosition1
	});

	var marker2 = new daum.maps.Marker({
	    position: markerPosition2
	});

	var marker3 = new daum.maps.Marker({
	    position: markerPosition3
	});

	var marker4 = new daum.maps.Marker({
	    position: markerPosition4
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker1.setMap(map1);
	marker2.setMap(map2);
	marker3.setMap(map3);
	marker4.setMap(map4);

    function scrollBtnOn(scrollLeft) {
    	for(var i=0;i<scrollIdx.length-1;i++) {
  			if(scrollLeft >= scrollIdx[i] && scrollLeft < scrollIdx[i+1]) {
  				console.log(i);
  				for(var j=0;j<4;j++) {
  					if(i==j) {
  						$('.buttons > .btn').children().eq(j).addClass('btn0' + (j+1)+'-on').removeClass('btn0' + (j+1));
  					} else {
  						$('.buttons > .btn').children().eq(j).addClass('btn0' + (j+1)).removeClass('btn0' + (j+1)+'-on');
  					}
  				}
  			}
  		}
    }

    // 각각 카테고리  이동하기	
	// pop02 -wrapper1
	$(".pop02_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop02_wrapper2,.pop02_wrapper3").addClass("noshow");
		$(".pop02_wrapper1").removeClass("noshow");	

	})
	$(".pop02_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop02_wrapper1,.pop02_wrapper3").addClass("noshow");
		$(".pop02_wrapper2").removeClass("noshow");
		map1.relayout();
	})
	$(".pop02_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop02_wrapper1,.pop02_wrapper2").addClass("noshow");
		$(".pop02_wrapper3").removeClass("noshow");
	})
	// wrapper2
	$(".pop02_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop02_wrapper2,.pop02_wrapper3").addClass("noshow");
		$(".pop02_wrapper1").removeClass("noshow");	
	})
	$(".pop02_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop02_wrapper1,.pop02_wrapper3").addClass("noshow");
		$(".pop02_wrapper2").removeClass("noshow");
	})
	$(".pop02_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop02_wrapper1,.pop02_wrapper2").addClass("noshow");
		$(".pop02_wrapper3").removeClass("noshow");
	})
	// wrapper3
	$(".pop02_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop02_wrapper2,.pop02_wrapper3").addClass("noshow");
		$(".pop02_wrapper1").removeClass("noshow");	
	})
	$(".pop02_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop02_wrapper1,.pop02_wrapper3").addClass("noshow");
		$(".pop02_wrapper2").removeClass("noshow");
	})
	$(".pop02_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop02_wrapper1,.pop02_wrapper2").addClass("noshow");
		$(".pop02_wrapper3").removeClass("noshow");
	})

	// pop03 -wrapper1
	$(".pop03_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop03_wrapper2,.pop03_wrapper3").addClass("noshow");
		$(".pop03_wrapper1").removeClass("noshow");	
	})
	$(".pop03_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop03_wrapper1,.pop03_wrapper3").addClass("noshow");
		$(".pop03_wrapper2").removeClass("noshow");
		map2.relayout();
	})
	$(".pop03_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop03_wrapper1,.pop03_wrapper2").addClass("noshow");
		$(".pop03_wrapper3").removeClass("noshow");
	})
	// wrapper2
	$(".pop03_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop03_wrapper2,.pop03_wrapper3").addClass("noshow");
		$(".pop03_wrapper1").removeClass("noshow");	
	})
	$(".pop03_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop03_wrapper1,.pop03_wrapper3").addClass("noshow");
		$(".pop03_wrapper2").removeClass("noshow");
	})
	$(".pop03_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop03_wrapper1,.pop03_wrapper2").addClass("noshow");
		$(".pop03_wrapper3").removeClass("noshow");
	})
	// wrapper3
	$(".pop03_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop03_wrapper2,.pop03_wrapper3").addClass("noshow");
		$(".pop03_wrapper1").removeClass("noshow");	
	})
	$(".pop03_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop03_wrapper1,.pop03_wrapper3").addClass("noshow");
		$(".pop03_wrapper2").removeClass("noshow");
	})
	$(".pop03_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop03_wrapper1,.pop03_wrapper2").addClass("noshow");
		$(".pop03_wrapper3").removeClass("noshow");
	})

	// pop04 -wrapper1
	$(".pop04_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop04_wrapper2,.pop04_wrapper3").addClass("noshow");
		$(".pop04_wrapper1").removeClass("noshow");	
	})
	$(".pop04_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop04_wrapper1,.pop04_wrapper3").addClass("noshow");
		$(".pop04_wrapper2").removeClass("noshow");
		map3.relayout();
	})
	$(".pop04_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop04_wrapper1,.pop04_wrapper2").addClass("noshow");
		$(".pop04_wrapper3").removeClass("noshow");
	})
	// wrapper2
	$(".pop04_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop04_wrapper2,.pop04_wrapper3").addClass("noshow");
		$(".pop04_wrapper1").removeClass("noshow");	
	})
	$(".pop04_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop04_wrapper1,.pop04_wrapper3").addClass("noshow");
		$(".pop04_wrapper2").removeClass("noshow");
	})
	$(".pop04_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop04_wrapper1,.pop04_wrapper2").addClass("noshow");
		$(".pop04_wrapper3").removeClass("noshow");
	})
	// wrapper3
	$(".pop04_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop04_wrapper2,.pop04_wrapper3").addClass("noshow");
		$(".pop04_wrapper1").removeClass("noshow");	
	})
	$(".pop04_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop04_wrapper1,.pop04_wrapper3").addClass("noshow");
		$(".pop04_wrapper2").removeClass("noshow");
	})
	$(".pop04_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop04_wrapper1,.pop04_wrapper2").addClass("noshow");
		$(".pop04_wrapper3").removeClass("noshow");
	})

	// pop05 -wrapper1
	$(".pop05_wrapper1>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop05_wrapper2,.pop05_wrapper3").addClass("noshow");
		$(".pop05_wrapper1").removeClass("noshow");	
	})
	$(".pop05_wrapper1>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop05_wrapper1,.pop05_wrapper3").addClass("noshow");
		$(".pop05_wrapper2").removeClass("noshow");
		map4.relayout();
	})
	$(".pop05_wrapper1>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop05_wrapper1,.pop05_wrapper2").addClass("noshow");
		$(".pop05_wrapper3").removeClass("noshow");
	})
	// wrapper2
	$(".pop05_wrapper2>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop05_wrapper2,.pop05_wrapper3").addClass("noshow");
		$(".pop05_wrapper1").removeClass("noshow");	
	})
	$(".pop05_wrapper2>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop05_wrapper1,.pop05_wrapper3").addClass("noshow");
		$(".pop05_wrapper2").removeClass("noshow");
	})
	$(".pop05_wrapper2>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop05_wrapper1,.pop05_wrapper2").addClass("noshow");
		$(".pop05_wrapper3").removeClass("noshow");
	})
	// wrapper3
	$(".pop05_wrapper3>.pop_header>ul>li:nth-child(1)>p").click(function(){
		$(".pop05_wrapper2,.pop05_wrapper3").addClass("noshow");
		$(".pop05_wrapper1").removeClass("noshow");	
	})
	$(".pop05_wrapper3>.pop_header>ul>li:nth-child(2)>p").click(function(){
		$(".pop05_wrapper1,.pop05_wrapper3").addClass("noshow");
		$(".pop05_wrapper2").removeClass("noshow");
	})
	$(".pop05_wrapper3>.pop_header>ul>li:nth-child(3)>p").click(function(){
		$(".pop05_wrapper1,.pop05_wrapper2").addClass("noshow");
		$(".pop05_wrapper3").removeClass("noshow");
	})



	// // 문화비축기지 버튼
	$(".pop02_btn1").click(function(){
		return;
	})
	$(".pop02_btn2").click(function(){
		$(".pop3").removeClass("noshow").css("top","0px");
		$(".pop2").addClass("noshow").css("top","-1000px");
	})
	$(".pop02_btn3").click(function(){
		$(".pop4").removeClass("noshow").css("top","0px");
		$(".pop2").addClass("noshow").css("top","-1000px");
	})
	$(".pop02_btn4").click(function(){
		$(".pop5").removeClass("noshow").css("top","0px");
		$(".pop2").addClass("noshow").css("top","-1000px");	
	})
	// // 여의도 버튼
	$(".pop03_btn1").click(function(){
		$(".pop2").removeClass("noshow").css("top","0px");
		$(".pop3").addClass("noshow").css("top","-1000px");
	})
	$(".pop03_btn2").click(function(){
		return;
	})
	$(".pop03_btn3").click(function(){
		$(".pop4").removeClass("noshow").css("top","0px");
		$(".pop3").addClass("noshow").css("top","-1000px");
	})
	$(".pop03_btn4").click(function(){
		$(".pop5").removeClass("noshow").css("top","0px");
		$(".pop3").addClass("noshow").css("top","-1000px");	
	})
	// // 청계천 버튼
	$(".pop04_btn1").click(function(){
		$(".pop2").removeClass("noshow").css("top","0px");
		$(".pop4").addClass("noshow").css("top","-1000px");
	})
	$(".pop04_btn2").click(function(){
		$(".pop3").removeClass("noshow").css("top","0px");
		$(".pop4").addClass("noshow").css("top","-1000px");
	})
	$(".pop04_btn3").click(function(){
		return;		
	})
	$(".pop04_btn4").click(function(){
		$(".pop5").removeClass("noshow").css("top","0px");
		$(".pop4").addClass("noshow").css("top","-1000px");	
	})
	// // DDP 버튼
	$(".pop05_btn1").click(function(){
		$(".pop2").removeClass("noshow").css("top","0px");
		$(".pop5").addClass("noshow").css("top","-1000px");
	})
	$(".pop05_btn2").click(function(){
		$(".pop3").removeClass("noshow").css("top","0px");
		$(".pop5").addClass("noshow").css("top","-1000px");
	})
	$(".pop05_btn3").click(function(){
		$(".pop4").removeClass("noshow").css("top","0px");
		$(".pop5").addClass("noshow").css("top","-1000px");
	})
	$(".pop05_btn4").click(function(){
		return;
	})
})

// //////////////// //////////////// //////////////// //////////////// //////////////// //////////////
	$(function(){	
		
	})
// //////////////// //////////////// //////////////// //////////////// //////////////// //////////////

$(function(){
	/*menu drop down*/
	function click(){
		var clickCount=0;

		$(".menu_down").click(function(){
			if(clickCount==0){
				$(".menu").animate({top: "+=160px"});
				$(".menu_border").animate({top: "+=110px"});
				clickCount+=1;
			}else{
				$(".menu").animate({top: "-=160px"});
				$(".menu_border").animate({top: "-=110px"});
				clickCount=0;
			}
		});
	}
	click();

	/*app_spark*/
	function bgSequence(bgName, maxNum, sqSize, speed) {
	    var sqName = bgName;
	    var total = maxNum;
	    var posNum = sqSize;
	    var idx = 0;
	    var total = maxNum; // 전체 시퀀스
	    var posNum = sqSize; // 이동 범위

	    function bgAni() {
	        if (idx < total) {
	            idx++;
	            sqName.css({'background-position': 'center ' + (-posNum) + 'px'});
	            posNum += sqSize;
	        } else {
	            idx = 0;
	            posNum = sqSize;
	        }
	        setTimeout(bgAni, speed);
	    }
	    bgAni();
	}
	bgSequence($(".app_spark"), 7, 140, 80);

	/*airship float*/
	TweenMax.to($(".airship"), 1, {marginTop: 10, repeat: -1, yoyo: true, repeatDelay: 0,ease: Quad.easeInOut});

	/*road-light move*/
	$(".road-light2").css("opacity", "0");

	function roadLightOn(){
		if($(".road-light2").css("opacity")==0){
			$(".road-light2").animate({opacity: "1"}, 2000);
		}else{
			$(".road-light2").animate({opacity: "0"}, 2000);
		}
	}

	setInterval(roadLightOn, 3000);
	
	/*bd01-door move*/
	$(".bd01, .bd01-door").hover(function(){$(".bd01-door02").stop().animate({marginLeft:"-72px"});}, function(){$(".bd01-door02").stop().animate({marginLeft:"0px"});});

	/*bd window move*/
	function windowOnOff() {
	  var $div = $( ".window > img" );
	  var start = Math.floor( Math.random() * $div.length );
	  var end = Math.floor( Math.random() * ( $div.length - start ) ) +
	    start + 1;
	  if ( end === $div.length ) {
	    end = undefined;
	  }
	  $div.attr( "src", "images/scene1/bd02_window2.png" );
	  if ( end ) {
	    $div.slice( start, end ).attr( "src", "images/scene1/bd02_window.png" );
	  } else {
	    $div.slice( start ).attr( "src", "images/scene1/bd02_window.png" );
	  }
	}

	setInterval(windowOnOff, 3000);
		
	/*con01_door move*/
	$(".con01_h, .con01_detail").hover(function(){$(".con01_door").stop().animate({marginLeft:"45px"});}, function(){$(".con01_door").stop().animate({marginLeft:"0px"});});

	/*char move*/
	var cData01=["images/main/c01_1.png", "images/main/c01_2.png", "images/main/c01_3.png", "images/main/c01_4.png", "images/main/c01_5.png"];

	var cData02=["images/main/c02_1.png", "images/main/c02_2.png", "images/main/c02_3.png", "images/main/c02_4.png", "images/main/c02_5.png"];

	var cData03=["images/main/c03_1.png", "images/main/c03_2.png", "images/main/c03_3.png", "images/main/c03_4.png", "images/main/c03_5.png"];

	var cData04=["images/main/c04_1.png", "images/main/c04_2.png", "images/main/c04_3.png", "images/main/c04_4.png", "images/main/c04_5.png"];

	var cData05=["images/main/c05_1.png", "images/main/c05_2.png", "images/main/c05_3.png", "images/main/c05_4.png", "images/main/c05_5.png", "images/main/c05_6.png"];

	var cData06=["images/main/c06_1.png", "images/main/c06_2.png", "images/main/c06_3.png", "images/main/c06_4.png", "images/main/c06_5.png", "images/main/c06_6.png", "images/main/c06_7.png", "images/main/c06_8.png", "images/main/c06_9.png", "images/main/c06_10.png"];

	var cData07=["images/main/c07_1.png", "images/main/c07_2.png", "images/main/c07_3.png", "images/main/c07_4.png", "images/main/c07_5.png", "images/main/c07_6.png", "images/main/c07_7.png", "images/main/c07_8.png", "images/main/c07_9.png", "images/main/c07_10.png", "images/main/c07_11.png", "images/main/c07_12.png"];

	var cIndex01=0;
	var cIndex02=0;
	var cIndex03=0;
	var cIndex04=0;
	var cIndex05=0;
	var cIndex06=0;
	var mLeft06=0;
	var cIndex07=0;
	var mLeft07=0;

	var cahr01=setInterval(function(){
		cIndex01++;
		if(cIndex01==5){
			cIndex01=0;
		}	
		$(".char01 > img").attr("src", cData01[cIndex01]);
	}, 500);

	var cahr02=setInterval(function(){
		cIndex02++;
		if(cIndex02==5){
			cIndex02=0;
		}	
		$(".char02 > img").attr("src", cData02[cIndex02]);
	}, 500);

	var cahr03=setInterval(function(){
		cIndex03++;
		if(cIndex03==5){
			cIndex03=0;
		}	
		$(".char03 > img").attr("src", cData03[cIndex03]);
	}, 500);

	var cahr04=setInterval(function(){
		cIndex04++;
		if(cIndex04==5){
			cIndex04=0;
		}	
		$(".char04 > img").attr("src", cData04[cIndex04]);
	}, 500);

	var cahr05=setInterval(function(){
		cIndex05++;
		if(cIndex05==6){
			cIndex05=0;
		}	
		$(".char05 > img").attr("src", cData05[cIndex05]);
	}, 500);

	var cahr06=setInterval(function(){
		if(0<=cIndex06&&cIndex06<5){
			mLeft06-=10;
			$(".char06 > img").animate({marginLeft: mLeft06+"px"});
		}else if(5<=cIndex06&&cIndex06<10){
			mLeft06+=10;
			$(".char06 > img").animate({marginLeft: mLeft06+"px"});
		}
		$(".char06 > img").attr("src", cData06[cIndex06]);
		cIndex06++;
		if(cIndex06>9){
			cIndex06=0;
			mLeft06=0;
		}
	}, 500);

	var cahr07=setInterval(function(){
		if(0<=cIndex07&&cIndex07<6){
			mLeft07-=10;
			$(".char07 > img").animate({marginLeft: mLeft07+"px"});
		}else if(6<=cIndex07&&cIndex07<12){
			mLeft07+=10;
			$(".char07 > img").animate({marginLeft: mLeft07+"px"});
		}
		$(".char07 > img").attr("src", cData07[cIndex07]);
		cIndex07++;
		if(cIndex07>11){
			cIndex07=0;
			mLeft07=0;
		}
	}, 500);

	/*firework move*/
	var data01=["", "images/main/firework01_1.png", "images/main/firework01_2.png", "images/main/firework01_3.png", "images/main/firework01_4.png", "images/main/firework01_5.png", "", "", "", "", "", "", "", "", ""];

	var data02=["", "", "", "", "", "", "images/main/firework02_1.png", "images/main/firework02_2.png", "images/main/firework02_3.png", "images/main/firework02_4.png", "", "", "", "", "", ""];

	var data03=["", "", "", "", "", "", "", "", "images/main/firework03_1.png", "images/main/firework03_2.png", "images/main/firework03_3.png", "images/main/firework03_4.png", "", "", "", "", ""];

	var data04=["", "", "", "", "images/main/firework04_1.png", "images/main/firework04_2.png", "images/main/firework04_3.png", "images/main/firework04_4.png", "", "", "", "", ""];
	
	var index01=0;
	var index02=0;
	var index03=0;
	var index04=0;
	var index05=0;
	var index06=0;
	var index07=0;
	var index08=0;
	var index09=0;
	var index10=0;
	var index11=0;
	var index12=0;
	var index13=0;

	var fw01=setInterval(function(){
		index01++;
		if(index01==15){
			index01=0;
		}	
		$(".fw01 > img").attr("src", data01[index01]);
	}, 100);

	var fw02=setInterval(function(){
		index02++;
		if(index02==16){
			index02=0;
		}
		$(".fw02 > img").attr("src", data02[index02]);
	}, 100);

	var fw03=setInterval(function(){
		index03++;
		if(index03==17){
			index03=0;
		}
		$(".fw03 > img").attr("src", data03[index03]);
	}, 100);

	var fw04=setInterval(function(){
		index04++;
		if(index04==13){
			index04=0;
		}
		$(".fw04 > img").attr("src", data04[index04]);
	}, 100);

	var fw05=setInterval(function(){
		index05++;
		if(index05==16){
			index05=0;
		}
		$(".fw05 > img").attr("src", data02[index05]);
	}, 100);

	var fw06=setInterval(function(){
		index06++;
		if(index06==16){
			index06=0;
		}
		$(".fw06 > img").attr("src", data02[index06]);
	}, 100);

	var fw07=setInterval(function(){
		index07++;
		if(index07==17){
			index07=0;
		}
		$(".fw07 > img").attr("src", data03[index07]);
	}, 100);

	var fw08=setInterval(function(){
		index08++;
		if(index08==16){
			index08=0;
		}
		$(".fw08 > img").attr("src", data02[index08]);
	}, 100);

	var fw09=setInterval(function(){
		index09++;
		if(index09==16){
			index09=0;
		}
		$(".fw09 > img").attr("src", data02[index09]);
	}, 100);

	var fw10=setInterval(function(){
		index10++;
		if(index10==17){
			index10=0;
		}
		$(".fw10 > img").attr("src", data03[index10]);
	}, 100);

	var fw11=setInterval(function(){
		index11++;
		if(index11==16){
			index11=0;
		}
		$(".fw11 > img").attr("src", data02[index11]);
	}, 100);

	var fw12=setInterval(function(){
		index12++;
		if(index12==15){
			index12=0;
		}	
		$(".fw12 > img").attr("src", data01[index12]);
	}, 100);

	var fw13=setInterval(function(){
		index13++;
		if(index13==13){
			index13=0;
		}
		$(".fw13 > img").attr("src", data04[index13]);
	}, 100);

	/*truck hover effect*/
	$(".truck01, .truck01_h").hover(function(){$(".truck01_h").show();}, function(){$(".truck01_h").hide();});

	$(".truck02, .truck02_h").hover(function(){$(".truck02_h").show();}, function(){$(".truck02_h").hide();});

	$(".truck03, .truck03_h").hover(function(){$(".truck03_h").show();}, function(){$(".truck03_h").hide();});

	$(".truck04, .truck04_h").hover(function(){$(".truck04_h").show();}, function(){$(".truck04_h").hide();});
})













