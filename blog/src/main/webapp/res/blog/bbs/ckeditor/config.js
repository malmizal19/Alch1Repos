/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc';

	config.skin = 'bootstrapck';
	
	config.language = 'ko'; //한국어,언어는 /설치폴더/lang/ 폴더에 있는 js의 명을 참조하심 됨..
	config.height = 500; // 로딩되어 보여질때 기본 폭과 넓이 설정 폭이야 뭐 거진 100%일거고., 500 pixels.
	config.width = 600;
	config.enterMode=CKEDITOR.ENTER_P; // 엔터와 쉬프트 엔터를 칠때의 행동 정의 , 기본은 쉬프트 엔터를 쳐야 바로 밑줄로 이동합니다.
    config.shiftEnterMode=CKEDITOR.ENTER_P;
    config.toolbar = 'Full';
    
    	
    config.font_defaultLabel = '굴림';
    config.font_names = '굴림/굴림;Apple SD 산돌고딕 Neo/Apple SD 산돌고딕 Neo;나눔고딕/나눔고딕;나눔명조/나눔명조;Gungsuh/Gungsuh;Arial/Arial;Tahoma/Tahoma;Verdana/Verdana';
    
//여기 ckeditor 는 프로젝트명
// Remove some buttons, provided by the standard plugins, which we don't
    // need to have in the Standard(s) toolbar.
    
    config.filebrowserBrowseUrl = '/res/blog/bbs/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/res/blog/bbs/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl = '/res/blog/bbs/ckfinder/ckfinder.html?type=Flash';
    
    config.filebrowserUploadUrl = '/res/blog/bbs/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/res/blog/bbs/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/res/blog/bbs/ckfinder/core/connector/java/connector.java?command=QuickUpload&type=Flash';

}

/*
CKEDITOR.on( 'dialogDefinition', function( ev ) {
	  var tab, field, dialogName = ev.data.name,
	      dialogDefinition = ev.data.definition;
	 

	  if( dialogName == 'image' )
	  {  
	      var infoTab = dialogDefinition.getContents( 'info' );
	      
	    txtWidth = infoTab.get( 'txtWidth' );
	    txtWidth['default'] = 550;   
	  
	  }
	});  


*/