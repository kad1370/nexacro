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
                this.set_name("Pattern_03");
                this.set_titletext("엑셀 Import / Export");
                this._setFormPosition(0,0,800,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">100</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Gil-Dong Hong</Col><Col id=\"telno\">02-1234-5678</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">100</Col></Row><Row><Col id=\"dept_code\">200</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Sun-Sin Lee</Col><Col id=\"telno\">02-2345-6789</Col><Col id=\"address\">Pusan Korea</Col><Col id=\"age\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "0", "38", null, "170", "0", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"address\"/><Cell col=\"5\" disptype=\"normal\" text=\"age\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:address\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_export", "absolute", null, "6", "114", "29", "8", null, this);
            obj.set_taborder("1");
            obj.set_text("엑셀 다운로드");
            obj.set_cssclass("btn_WF_Download");
            this.addChild(obj.name, obj);

            obj = new Button("btn_import", "absolute", null, "214", "114", "29", "8", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀 업로드");
            obj.set_cssclass("btn_WF_Upload");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "246", null, null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"address\"/><Cell col=\"5\" disptype=\"normal\" text=\"age\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:address\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "18", "140", "12", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1.엑셀익스포트");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1", "226", "140", "12", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2.엑셀임포트");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("excelExportImport");
            		p.set_titletext("엑셀 Import / Export");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_03.xfdl", "Lib::Comm.xjs");
        this.registerScript("Pattern_03.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : Pattern_03
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : 엑셀 import/Export
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
        	//Iject.formOnload(obj);
        }

        //ExcelExport 실행
        this.btn_export_onclick = function(obj,e)
        {
            //Iject.exportExcel(this,this.grd_list);
            var oGrid  = this.grd_list;
            var dToday = new Date();
            var sSvcUrl = application.services["svcurl"].url+"/XExportImport.do";
            var strType = oGrid.toString().toUpperCase();
            var strSheet = "sheet";
            var strExportFileName = dToday.getTime() + "_" + "export";

            var exportObj = new ExcelExportObject();

            exportObj.clear();
            exportObj.addEventHandler("onsuccess", this.exportOnsuccess, this);
            exportObj.addEventHandler("onerror"  , this.exportOnerror, this);
            exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
            exportObj.set_exportuitype("exportprogress") // set
            exportObj.set_exporturl(sSvcUrl);
            exportObj.set_exportfilename(strExportFileName);

            if(strType == "[OBJECT GRID]")
            {
                oGrid = oGrid;
                sSheetName = strSheet+"1";
                exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");

            }
            else
            {
                for(var i=0; i<obj.length; i++)
                {
                    sSheetName = strSheet+(i+1);
                    oGrid = oGrid[i];
                    exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
                }
            }

            exportObj.exportData();
        }

        
        /**
         * @class excel export on sucess <br>
         * @param {Object} obj	
         * @param {Event} e		
         * @return N/A
         * @example
         */
        this.exportOnsuccess = function(obj,e)
        {	
        	this.setWaitCursor(false);
        }

        /**
         * @class  excel export on error <br>
         * @param {Object} obj	
         * @param {Event} e		
         * @return N/A
         * @example
         */
        this.exportOnerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	trace(e.errorcode);
        	trace(e.errormsg);
        	
        	this.alert("Excel Export Error!!");
        }

        this.btn_import_onclick = function(obj,e)
        {
            this.setWaitCursor(true);

            //1.heead = 시트명  뿌릴 헤드값 A1 ~ G1 
            //2. body = 그리드 body에 뿌릴 excel sheet 번호 
            var sSheet = "head=sheet1!A1:G1;body=sheet1!A2;";  
           
            //출력할 dataset 명
        	var sDataset = "ds_list";
        	var svcUrl = application.services["svcurl"].url + "/XExportImport.do";
        	var importObj = new nexacro.ExcelImportObject("importExcel",this);
            importObj.set_importtype(nexacro.ImportTypes.EXCEL);
            importObj.addEventHandler("onsuccess", this.importOnsuccess,  this);
            importObj.addEventHandler("onerror"  , this.importAllOnerror, this);
            importObj.set_importurl(svcUrl);
            importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+sDataset+"=outDs]");
            objImport = null;
        }

        
        /**
         * @class excel import on success <br>
         * @param {Object} obj	
         * @param {Event} e		
         * @return N/A
         * @example
         */
        this.importOnsuccess = function(obj,e)
        {		
        	this.setWaitCursor(false);
        };

        /**
         * @class  excel import on error <br>
         * @param {Object} obj	
         * @param {Event} e		
         * @return N/A
         * @example
         */
        this.importAllOnerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	this.alert("Excel Import Error!!");
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_export.addEventHandler("onclick", this.btn_export_onclick, this);
            this.btn_import.addEventHandler("onclick", this.btn_import_onclick, this);

        };

        this.loadIncludeScript("Pattern_03.xfdl");

       
    };
}
)();
