(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("Pattern_01");
                this.set_titletext("단건 데이터 조회 샘플");
                this._setFormPosition(0,0,800,369);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"PageIndex\" type=\"INT\" size=\"30\" value=\"1\"/><ConstColumn id=\"PageSize\" type=\"INT\" size=\"30\" value=\"5\"/><ConstColumn id=\"PageUnit\" type=\"INT\" size=\"30\" value=\"5\"/><Column id=\"searchCondition\" type=\"STRING\" size=\"100\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"searchKeyword\">홍길동</Col><Col id=\"searchCondition\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"enName\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"DATE\" size=\"256\"/><Column id=\"cellPhone\" type=\"STRING\" size=\"256\"/><Column id=\"zipCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0%", "1", null, "41", "-0.25%", null, this);
            obj.set_taborder("24");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("st_searchCondition", "absolute", "17", "11", "48", "20", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("domainId").set("nexa.s_condition");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchKeyword", "absolute", "10.01%", "11", null, "20", "57.57%", null, this.div_search);
            obj.set_taborder("1");
            obj.set_value("홍길동");
            obj.set_cssclass("edt_WF_Search");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "0", "53", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "128", null, this.div_grid_top);
            obj.set_taborder("27");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Add");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "75", null, this.div_grid_top);
            obj.set_taborder("28");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "5", null, this.div_grid_top);
            obj.set_taborder("29");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Custom");
            obj.getSetter("domainId").set("nexa.save");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Static("stc_detail", "absolute", "0.13%", "52", null, "20", "79%", null, this);
            obj.set_taborder("21");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", null, "9", "58", "25", "4", null, this);
            obj.set_taborder("22");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "0", "78", null, "2", "0", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailLine");
            this.addChild(obj.name, obj);

            obj = new Static("stc_id", "absolute", "0", "80", "164", "30", null, null, this);
            obj.set_taborder("25");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("1px 1px 1px 10");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "394", "109", "164", "30", null, null, this);
            obj.set_taborder("26");
            obj.set_text("EngName");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0%", "138", "164", "30", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Phone");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id", "absolute", "163", "80", "232", "30", null, null, this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEngName", "absolute", "557", "109", null, "30", "0%", null, this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("stc_name", "absolute", "0%", "109", "164", "30", null, null, this);
            obj.set_taborder("30");
            obj.set_text("FullName");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("1px 1px 1px 10");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fullName", "absolute", "163", "109", "232", "30", null, null, this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("stc_password", "absolute", "394", "80", null, "30", "242", null, this);
            obj.set_taborder("32");
            obj.set_text("PASSWORD");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("1px 1px 1px 10");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_password", "absolute", "557", "80", null, "30", "0", null, this);
            obj.set_taborder("33");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone", "absolute", "163", "138", "232", "30", null, null, this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "394", "138", "164", "30", null, null, this);
            obj.set_taborder("35");
            obj.set_text("CellPhone");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone", "absolute", "557", "138", null, "30", "0%", null, this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "394", "167", "164", "30", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Email");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email", "absolute", "557", "167", null, "30", "0", null, this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0%", "167", "164", "30", null, null, this);
            obj.set_taborder("39");
            obj.set_text("ZipCode");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_zipCode", "absolute", "163", "167", "232", "30", null, null, this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 369, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("단건 데이터 조회 샘플");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_id","value","ds_user","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtEngName","value","ds_user","enName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_fullName","value","ds_user","userName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_password","value","ds_user","password");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_phone","value","ds_user","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_cellPhone","value","ds_user","cellPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_email","value","ds_user","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_zipCode","value","ds_user","zipCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_01.xfdl", "Lib::Comm.xjs");
        this.registerScript("Pattern_01.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : Pattern_01
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : SingleDetail
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "Lib::Comm.xjs";

        
        /***********************************************************************************
        * Global/Local Variable
        ***********************************************************************************/

        

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.form_onload = function(obj,e)
        {
        	//기본 공통  함수 초기화
        	Iject.formOnload(obj);	
           
        } 

        
        /**
         * 사용자 정보 조회 - Ibatis
         * @return 
         * @example
         */
        this.fn_search = function(obj,e)
        { 
            var searchCondition =  "NAME";
            var searchKeyword   = this.div_search.edt_searchKeyword.value;       
            
        	this.ds_search.setColumn(0, "searchCondition", "NAME");
        	this.ds_search.setColumn(0, "searchKeyword", searchKeyword);
            
            var strSvcId    = "search";
        	var strSvcUrl   = application.services["svcurl"].url + "/selectUserInfoWithVo.do";
        	var inData      = "ds_search=ds_search";
        	var outData     = "ds_user=output1";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	var nDataType   = 0;
        	
            this.transaction( strSvcId      //1.strMergeSvcID
        					, strSvcUrl     //2.strServiceUrl
        					, inData        //3.inDataSet
        					, outData       //4.outDataSet
        					, strArg        //5.arguments
        					, callBackFnc	//6.strCallbackFunc
        					, isAsync       //7.bAsync
        					, nDataType     //0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
        					, false);       //0.bCompress ( default : false ) 
        }

        

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}
        	
        	switch(svcID)
        	{
        		case "search":
        			break;
        			
        		case "save":
        			// 저장 되었습니다.
        			alert("저장완료");
        			break;
        		case "delete":
        			alert("삭제완료");
        			break;
        	}
        }

        
        //추가
        this.fn_add = function(obj,e)
        {
        	var nRow = this.ds_user.addRow();
        	this.div_search.edt_searchKeyword.set_value("");
        }

        //삭제
        this.fn_delete = function(obj,e)
        {
        	var nRow = this.ds_user.rowposition;
        	this.ds_user.deleteRow(nRow);
        	var rtnValue = Iject.confirm("삭제 하시겠습니까?");
        	
        	if(rtnValue)
        	{
        	
        		this.fn_save("delete");
        	}
        	else
        	{
        		this.fn_search();
        	}
        }

        
        //저장
        this.fn_save = function(strid)
        {
            var strSvcId    = strid;
        	var strSvcUrl   = application.services["svcurl"].url + "/updateUserInfo.do";
        	var inData      = "input1=ds_user:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	var nDataType   = 0;
        	
            this.transaction( strSvcId      //1.strMergeSvcID
        					, strSvcUrl     //2.strServiceUrl
        					, inData        //3.inDataSet
        					, outData       //4.outDataSet
        					, strArg        //5.arguments
        					, callBackFnc	//6.strCallbackFunc
        					, isAsync       //7.bAsync
        					, nDataType     //0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
        					, false);       //0.bCompress ( default : false ) 
        }

        
        /**********************************************************************
        * User Function
        ***********************************************************************/

        //저장버튼 클릭시 
        this.div_grid_top_btn_save_onclick = function(obj,e)
        {
        	this.fn_save("save");
        }

        //검색  Enter키
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	if ( e.keycode == 13 )
        	{
        		this.fn_search();
        	}
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_searchKeyword.addEventHandler("onkeyup", this.div_search_btn_search_onclick, this);
            this.div_grid_top.btn_add.addEventHandler("onclick", this.fn_add, this);
            this.div_grid_top.btn_delete.addEventHandler("onclick", this.fn_delete, this);
            this.div_grid_top.btn_save.addEventHandler("onclick", this.div_grid_top_btn_save_onclick, this);
            this.Button05.addEventHandler("onclick", this.fn_search, this);
            this.edt_id.addEventHandler("oneditclick", this.divInput_edt_id_oneditclick, this);

        };

        this.loadIncludeScript("Pattern_01.xfdl");

       
    };
}
)();
