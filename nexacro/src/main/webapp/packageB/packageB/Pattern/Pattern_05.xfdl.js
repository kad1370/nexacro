﻿(function()
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
                this.set_name("Pattern_05");
                this.set_titletext("페이징 샘플");
                this._setFormPosition(0,0,800,400);
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
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"100\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"100\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchKeyword\"/><Col id=\"searchCondition\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"postId\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"communityId\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"DATE\" size=\"256\"/><Column id=\"hitCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pagingInfo", this);
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"totalRecordCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "0", "89", null, null, "0", "40", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"164\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"69\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell style=\"background:#348ddf18;color:#1f5ca7ff;color2:#1f5ca7ff;\" text=\"PostID\"/><Cell col=\"1\" style=\"background:#348ddf18;color:#1f5ca7ff;color2:#1f5ca7ff;backgroundimage: ;\" text=\"Title\"/><Cell col=\"2\" style=\"background:#348ddf18;color:#1f5ca7ff;color2:#1f5ca7ff;\" text=\"Contents\"/><Cell col=\"3\" style=\"background:#348ddf18;color:#1f5ca7ff;color2:#1f5ca7ff;\" text=\"Count\"/></Band><Band id=\"body\"><Cell celltype=\"body\" edittype=\"none\" style=\"cursor: ;\" text=\"bind:postId\"/><Cell col=\"1\" celltype=\"none\" edittype=\"normal\" style=\"align:left;font:underline 10 arial;cursor:hand;\" text=\"bind:title\" maskchar=\" \" suppress=\"0\"/><Cell col=\"2\" celltype=\"none\" edittype=\"normal\" text=\"bind:contents\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:hitCount\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "41", "0", null, this);
            obj.set_taborder("16");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Static("st_searchCondition", "absolute", "20", "6", "64", "25", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.getSetter("domainId").set("nexa.s_condition");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_searchCondition", "absolute", "86", "10", "140", "20", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cmb_searchCondition_innerdataset = new Dataset("cmb_searchCondition_innerdataset", this.div_search.cmb_searchCondition);
            cmb_searchCondition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">TITLE</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">CONTENTS</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");
            obj.set_innerdataset(cmb_searchCondition_innerdataset);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("domainId").set("nexa.name;nexa.code");
            obj = new Edit("edt_searchKeyword", "absolute", "227", "10", "261", "20", null, null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_index00", "absolute", "24.31%", "55", null, "25", "72.31%", null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("2");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, null, "58", "25", "8", "6", this.div_search);
            obj.set_taborder("31");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "0", "63", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title", "absolute", "33", "0", "120", null, null, "0", this.div_grid_top);
            obj.set_taborder("25");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Static("sta_total_cnt", "absolute", "8", "0", "20", null, null, "0", this.div_grid_top);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_GridFound");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "43.38%", null, "107", "31", null, "5", this);
            obj.set_taborder("21");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_index", "absolute", "11", "3", "27", "25", null, null, this.div_paging);
            obj.set_taborder("0");
            obj.set_text("1");
            this.div_paging.addChild(obj.name, obj);
            obj = new Button("btn_index00", "absolute", "39", "3", "28", "25", null, null, this.div_paging);
            obj.set_taborder("1");
            obj.set_text("2");
            this.div_paging.addChild(obj.name, obj);
            obj = new Button("btn_index01", "absolute", "68", "3", "28", "25", null, null, this.div_paging);
            obj.set_taborder("2");
            obj.set_text("3");
            this.div_paging.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
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
            obj = new Layout("default", "", 107, 31, this.div_paging,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_scrollbars("none");

            	}
            );
            this.div_paging.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("페이징 샘플");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cmb_searchCondition","value","ds_search","searchCondition");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_searchKeyword","value","ds_search","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_05.xfdl", "Lib::Comm.xjs");
        this.registerScript("Pattern_05.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : Pattern_06
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : Paging sample
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
        	Iject.formOnload(obj);  //form onload
        } 
         
        /**
         * 조회
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_search = function(obj,e)
        {
            var strSvcId    = "search";
        	var strSvcUrl   = application.services["svcurl"].url + "/samplePaging.do";
        	var inData      = "ds_search=ds_search";
        	var outData     = "ds_list=dsList ds_pagingInfo=dsPagingInfo";
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
                    this.fn_search_post();
        			break;
        	}
        }

        /**
         * 검색  Enter키
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	if ( e.keycode == 13 )
        	{
        		this.fn_search();
        	}
        }

        /**
         * 조회 후처리
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_search_post = function()
        {
        	//페이징 없는 경우
        	var nTotalCnt = this.ds_pagingInfo.getColumn(0, "totalRecordCount");

        	this.div_grid_top.sta_total_cnt.set_text(nTotalCnt);
        }

        this.btn_index_onclick = function(obj,e)
        {
        	var pageIndex = obj.text;
        	this.ds_search.setColumn(0, "pageIndex", pageIndex);
        	this.fn_search();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_searchKeyword.addEventHandler("onkeyup", this.div_search_btn_search_onclick, this);
            this.div_search.Button05.addEventHandler("onclick", this.fn_search, this);
            this.div_paging.btn_index.addEventHandler("onclick", this.btn_index_onclick, this);
            this.div_paging.btn_index00.addEventHandler("onclick", this.btn_index_onclick, this);
            this.div_paging.btn_index01.addEventHandler("onclick", this.btn_index_onclick, this);

        };

        this.loadIncludeScript("Pattern_05.xfdl");

       
    };
}
)();
