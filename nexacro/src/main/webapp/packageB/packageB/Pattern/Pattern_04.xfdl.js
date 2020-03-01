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
                this.set_name("Pattern_05");
                this.set_titletext("파일 업/다운로드");
                this._setFormPosition(0,0,800,775);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_fileMulti", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_single", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"string\" size=\"32\"/><Column id=\"fileimg\" type=\"string\" size=\"32\"/><Column id=\"filename\" type=\"string\" size=\"32\"/><Column id=\"filesize\" type=\"int\" size=\"4\"/><Column id=\"tranfilesize\" type=\"int\" size=\"4\"/><Column id=\"prog\" type=\"int\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_multi", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"string\" size=\"32\"/><Column id=\"fileimg\" type=\"string\" size=\"32\"/><Column id=\"filename\" type=\"string\" size=\"32\"/><Column id=\"filesize\" type=\"int\" size=\"4\"/><Column id=\"tranfilesize\" type=\"int\" size=\"4\"/><Column id=\"prog\" type=\"int\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new FileUpload("fileUploadMulti", "absolute", "0.88%", "370", null, "29", "17.88%", null, this);
            obj.set_taborder("1");
            obj.getSetter("retry").set("0");
            obj.set_multiselect("true");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "1%", "400", null, "230", "49.25%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_fileMulti");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"282\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일 경로\"/><Cell col=\"1\" text=\"파일 명\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadMulti", "absolute", "89.63%", "375", null, "19", "0.88%", null, this);
            obj.set_taborder("9");
            obj.set_text("업로드 파일");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fileDownload", "absolute", "101%", "16", null, "20", "-13.5%", null, this);
            obj.set_taborder("11");
            obj.getSetter("retry").set("0");
            obj.set_visible("false");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_multiFile", "absolute", "51.13%", "400", null, "230", "0.88%", null, this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_multi");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"153\"/><Column size=\"73\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"filename\"/><Cell col=\"1\" text=\"filesize\"/><Cell col=\"2\" text=\"tranfilesize\"/></Band><Band id=\"body\"><Cell text=\"bind:filename\"/><Cell col=\"1\" text=\"bind:filesize\"/><Cell col=\"2\" text=\"bind:tranfilesize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fileUploadSingle", "absolute", "0.88%", "31", null, "29", "17.88%", null, this);
            obj.set_taborder("14");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadSingle", "absolute", "89.63%", "34", null, "19", "0.88%", null, this);
            obj.set_taborder("15");
            obj.set_text("업로드 파일");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_singleFile", "absolute", "0.88%", "59", null, "77", "0.88%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_fileSingle");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"512\"/><Column size=\"252\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일 경로\"/><Cell col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_singleFile00", "absolute", "0.88%", "147", null, "77", "0.88%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_single");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"filename\"/><Cell col=\"1\" text=\"filesize\"/><Cell col=\"2\" text=\"tranfilesize\"/></Band><Band id=\"body\"><Cell text=\"bind:filename\"/><Cell col=\"1\" text=\"bind:filesize\"/><Cell col=\"2\" text=\"bind:tranfilesize\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_detail", "absolute", "1.13%", "348", null, "20", "78%", null, this);
            obj.set_taborder("18");
            obj.set_text("다중 파일 처리");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_detail00", "absolute", "1.13%", "8", null, "20", "78%", null, this);
            obj.set_taborder("19");
            obj.set_text("단일 파일 처리");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 775, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpDownload");
            		p.set_titletext("파일 업/다운로드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_04.xfdl", "Lib::Comm.xjs");
        this.registerScript("Pattern_04.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : Pattern_05
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : File up /down
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

        
        this.fileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.fileUploadSingle.value;
        	var sNewvalue = e.newvalue;
        	var sOldValue = e.oldvalue;
        	
        	//trace("sCompValue >> " + sCompValue +  " sNewvalue >> " + sNewvalue + "  sOldValue >> " + sOldValue );
        	var sFilePath = this.fileUploadSingle.value;
        	var dirExpt = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;
        	var sFileName = String(sFilePath).substr(dirExpt);
        	var nRow = this.ds_fileSingle.addRow();
        	
        	this.ds_fileSingle.setColumn(nRow, "FILE_PATH", sFilePath);
        	this.ds_fileSingle.setColumn(nRow, "FILE_NAME", sFileName);
        }

        this.fileUploadSingle_onerror = function(obj,e)
        {
        	trace("fileUpload_onerror >> " + e.errormsg);
        }

        this.fileUploadSingle_onsuccess = function(obj,e)
        {
        	trace("fileUpload_onsuccess >> " + e.datasets[0].saveXML());
        	this.ds_single.copyData(e.datasets[0]);
        }

        
        this.btn_AddItem_onclick = function(obj,e)
        {
        	this.fileUploadMulti.appendItem();
        }

        this.fileUploadMulti_onitemchanged = function(obj,e)
        {
        	var sFileName;
        	var sFilePath;
        	
        	if(obj.multiselect)
            {		
        	    //var sFullData = e.newvalue;
        		var sFullData = String(this.fileUploadMulti.value);
        		var aFilePath = sFullData.split(",");
        		this.ds_fileMulti.clearData();
        	}
        	
        	for(var i=0; i<aFilePath.length; i++)
        	{
        		sFilePath = String(aFilePath[i]);

        		var dirExpt = sFilePath.lastIndexOf("\\")+1;

        		sFileName = sFilePath.substr(dirExpt);
        		
        		this.ds_fileMulti.addRow();
        		
        		this.ds_fileMulti.setColumn(i, "FILE_PATH", sFilePath);
        		this.ds_fileMulti.setColumn(i, "FILE_NAME", sFileName);
        		this.ds_fileMulti.setColumn(i, "NUM", i+1);
        		this.ds_fileMulti.setColumn(i, "CHK",1);	
        	}
        }

        this.fileUploadMulti_onerror = function(obj,e)
        {
        	trace("fileUpload_onerror >> " + e.errormsg);
        }

        this.fileUploadMulti_onsuccess = function(obj,e)
        {
        	trace("fileUpload_onsuccess >> " + e.datasets[0].saveXML());
        	this.ds_multi.copyData(e.datasets[0]);
        }

        
        this.btn_uploadSingle_onclick = function(obj,e)
        {
        	var objFileUpload = this.fileUploadSingle;
        	
        	/**
        	 * 현재 Form 상의 FileUpload 컴포넌트를 서버에 업로드한다.
        	 * @param {Object} objFileUpload		파일업로드 컴포넌트
        	 * @param {String} sUrl		            파일업로드 서비스 호출 경로 (생략 가능)
        	 * @param {String} sPath				파일업로드시킬 폴더 위치 (생략 가능)
        	 * @example this.gfnFileUpload(objFileUpload);
        	 */
        	this.fnFileUpload(objFileUpload);
        }

        this.btn_uploadMulti_onclick = function(obj,e)
        {
        	//trace(this.dsFileMulti.saveXML());
            var objFileUpload = this.fileUploadMulti;

        	/**
        	 * 현재 Form 상의 FileUpload 컴포넌트를 서버에 업로드한다.
        	 * @param {Object} objFileUpload		파일업로드 컴포넌트
        	 * @param {String} sUrl		            파일업로드 서비스 호출 경로 (생략 가능)
        	 * @param {String} sPath				파일업로드시킬 폴더 위치 (생략 가능)
        	 * @example this.gfnFileUpload(objFileUpload);
        	 */
            this.fnFileUpload(objFileUpload);
        }

        this.grd_singleFile_oncellclick = function(obj,e)
        {
            if(this.ds_single.getRowCount() == 0 )
            {
                return;
            }
            
        	var objFileDownload = this.fileDownload;
        	var sFilename= this.ds_single.getColumn(e.row,"filename");
        	
        	/**
        	 * 현재 Form 상의 FileDownload 컴포넌트를 이용하여 지정한 위치에서 원하는 파일을 다운로드한다.
        	 * @param {Object} objFileDownload	파일다운로드 컴포넌트
        	 * @param {Object} sFilename		다운로드 할 파일명
        	 * @param {String} sUrl		        파일업로드 서비스 호출 경로 (생략 가능)
        	 * @param {String} sPath			파일업로드시킬 폴더 위치 (생략 가능)
        	 * @example this.gfnFileUpload(objFileUpload, sFilename);
        	 */
        	this.fnFileDownload(objFileDownload, sFilename);
        }

        

        
        this.fnFileUpload = function(objFileUpload,sUrl,sPath)
        {	
        	//파일업로드 서비스 호출 경로
        	var sFileUrl = application.services["svcurl"].url + "/advancedUploadFiles.do";
            
        	//파일 업로드 시킬 폴더 위치 지정
        	var sPath = "PATH=upload";
        	
        	var bSucc = objFileUpload.upload(sFileUrl + "?" + sPath);
        	trace("bSucc >> " + bSucc);
        }

        
        this.fnFileDownload = function(objFileDownload,sFilename,sUrl,sPath)
        {
        	//파일다운로드 서비스 호출 경로
        	var sFileUrl = application.services["svcurl"].url  + "/advancedDownloadFile.do";
        	
        	//파일 다운로드할 폴더 위치 지정
        	var sPath = "PATH=upload";
        	
        	objFileDownload.set_downloadfilename(sFilename);
        	objFileDownload.download(sFileUrl + "?" + sPath + "&fileName=" + sFilename);
        }

        
        this.grd_singleFile01_oncelldblclick = function(obj,e)
        {
        	
        }

        this.grd_multiFile_oncelldblclick = function(obj,e)
        {
        	if(this.ds_multi.getRowCount() == 0 )
            {
                return;
            }
            
        	var objFileDownload = this.fileDownload;
        	var sFilename= this.ds_multi.getColumn(e.row,"filename");
        	
        	/**
        	 * 현재 Form 상의 FileDownload 컴포넌트를 이용하여 지정한 위치에서 원하는 파일을 다운로드한다.
        	 * @param {Object} objFileDownload	파일다운로드 컴포넌트
        	 * @param {Object} sFilename		다운로드 할 파일명
        	 * @param {String} sUrl		        파일업로드 서비스 호출 경로 (생략 가능)
        	 * @param {String} sPath			파일업로드시킬 폴더 위치 (생략 가능)
        	 * @example this.gfnFileUpload(objFileUpload, sFilename);
        	 */
        	this.fnFileDownload(objFileDownload, sFilename);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.fileUploadMulti.addEventHandler("onitemchanged", this.fileUploadMulti_onitemchanged, this);
            this.fileUploadMulti.addEventHandler("onerror", this.fileUploadMulti_onerror, this);
            this.fileUploadMulti.addEventHandler("onsuccess", this.fileUploadMulti_onsuccess, this);
            this.btn_uploadMulti.addEventHandler("onclick", this.btn_uploadMulti_onclick, this);
            this.grd_multiFile.addEventHandler("oncelldblclick", this.grd_multiFile_oncelldblclick, this);
            this.fileUploadSingle.addEventHandler("onsuccess", this.fileUploadSingle_onsuccess, this);
            this.fileUploadSingle.addEventHandler("onerror", this.fileUploadSingle_onerror, this);
            this.fileUploadSingle.addEventHandler("onitemchanged", this.fileUploadSingle_onitemchanged, this);
            this.btn_uploadSingle.addEventHandler("onclick", this.btn_uploadSingle_onclick, this);
            this.grd_singleFile00.addEventHandler("oncelldblclick", this.grd_singleFile_oncellclick, this);

        };

        this.loadIncludeScript("Pattern_04.xfdl");

       
    };
}
)();
