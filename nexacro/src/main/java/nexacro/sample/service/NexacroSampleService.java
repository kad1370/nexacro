package nexacro.sample.service;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.SampleVO;

/**
 * 
 * <pre>
 * @title   
 * @desc    제공 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        Servlce Sample Intreface
 * @package nexacro.sample.service
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
public interface NexacroSampleService {
    List<SampleVO>           selectSampleVoList(SampleVO searchInfo);
    List<Map<String,Object>> selectSampleMapList(Map<String,String> searchInfo);
    List<SampleVO>           selectSamplePaging(SampleVO searchInfo);
    
    int selectSampleCount(SampleVO searchInfo);
    void updateSampleDataWithVo(List<SampleVO> sampleList);
    void updateSampleDataWithMap(List<Map<String,Object>> sampleList);
}
