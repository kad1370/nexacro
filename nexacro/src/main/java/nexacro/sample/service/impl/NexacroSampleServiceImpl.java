package nexacro.sample.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import nexacro.sample.service.NexacroSampleService;
import nexacro.sample.service.impl.ibatis.NexacroSampleDAO;
import nexacro.sample.vo.SampleVO;

/**
 * <pre>
 * @title   
 * @desc    제공 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        ServiceImpl Sample Class
 * @package nexacro.sample.service.impl
 * <pre>
 * @author  TOBESOFT
 * @since   2017. 11. 8.
 * @version 1.0
 * @see
 *
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		TOBESOFT	최초작성
 */
@Service("nexacroSampleService")
public class NexacroSampleServiceImpl extends EgovAbstractServiceImpl implements NexacroSampleService {

	private Logger logger = LoggerFactory.getLogger(NexacroSampleServiceImpl.class);
    @Resource(name = "nexacroSampleDAO")
    // Name 정의
    private NexacroSampleDAO nexacroSampleDAO;

    @Override
    public void updateSampleDataWithVo(List<SampleVO> sampleList) {

    	logger.debug("================== execute ... updateSampleDataWithVo ========================");
        int size = sampleList.size();
        for (int i=0; i<size; i++) {
            SampleVO sample = sampleList.get(i);
            if (sample instanceof DataSetRowTypeAccessor){
                DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) sample;
                
                if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
                    nexacroSampleDAO.insertSampleVO(sample);
                }
                else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
                	nexacroSampleDAO.updateSampleVO(sample);
                }
                else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
                	nexacroSampleDAO.deleteSampleVO(sample);
                }
            }
        }
    }
    
    @Override
    public void updateSampleDataWithMap(List<Map<String,Object>> sampleList) {
    	logger.debug("================== execute ... updateSampleDataWithMap ========================");
        int size = sampleList.size();
        for (int i=0; i<size; i++) {
        	Map<String,Object> sample = sampleList.get(i);
        	
    		int dataRowType = Integer.parseInt(String.valueOf(sample.get(DataSetRowTypeAccessor.NAME)));
            if (dataRowType == DataSet.ROW_TYPE_INSERTED){
                nexacroSampleDAO.insertSampleMap(sample);
            }
            else if (dataRowType == DataSet.ROW_TYPE_UPDATED){
            	nexacroSampleDAO.updateSampleMap(sample);
            }
            else if (dataRowType == DataSet.ROW_TYPE_DELETED){
            	nexacroSampleDAO.deleteSampleMap(sample);
            }
        }
    }
    
    @Override
    public List<SampleVO> selectSampleVoList(SampleVO searchInfo) {
        return nexacroSampleDAO.selectSampleVoList(searchInfo);
    }
    
    @Override
	public List<Map<String,Object>> selectSampleMapList(Map<String,String> searchInfo) {
    	return (List) nexacroSampleDAO.selectSampleMapList(searchInfo);
	}
    
    @Override
    public List<SampleVO> selectSamplePaging(SampleVO searchVO) {
    	return nexacroSampleDAO.selectSamplePaging(searchVO);
    }

	@Override
	public int selectSampleCount(SampleVO searchVO) {
		return nexacroSampleDAO.selectSampleCount(searchVO);
	}
}