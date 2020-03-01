package nexacro.sample.service.impl.ibatis;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import nexacro.sample.vo.SampleVO;

/**
 * Test를 위한 DAO Sample Class
 *
 * @author Park SeongMin
 * @since 08.12.2015
 * @version 1.0
 * @see
 */
@Repository("nexacroSampleDAO")
public class NexacroSampleDAO extends NexacroIbatisAbstractDAO {

    public List<SampleVO> selectSampleVoList(SampleVO searchInfo) {
    	return (List<SampleVO>) list("nexacroSample.selectSampleVOList", searchInfo);
    }
    
    public List<Map> selectSampleMapList(Map<String,String> searchInfo) {
    	return (List<Map>) list("nexacroSample.selectSampleMapList", searchInfo);
    }

    public List<SampleVO> selectSamplePaging(SampleVO searchInfo) {
    	return (List<SampleVO>) list("nexacroSample.selectSamplePaging", searchInfo);
    }
    
    public int selectSampleCount(SampleVO searchVO) {
		return (int) select("nexacroSample.selectSampleCount", searchVO);
	}
    
    public void insertSampleVO(SampleVO sample) {
        insert("nexacroSample.insertSampleVO", sample);
    }
    
    public void updateSampleVO(SampleVO sample) {
        update("nexacroSample.updateSampleVO", sample);
    }
    public void deleteSampleVO(SampleVO sample) {
        delete("nexacroSample.deleteSampleVO", sample);
    }

    
    public void insertSampleMap(Map<String,Object> sample) {
        insert("nexacroSample.insertSampleVO", sample);
    }
    
    public void updateSampleMap(Map<String,Object> sample) {
        update("nexacroSample.updateSampleVO", sample);
    }
    public void deleteSampleMap(Map<String,Object> sample) {
        delete("nexacroSample.deleteSampleVO", sample);
    }
}
