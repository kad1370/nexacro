package nexacro.sample.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.dao.mybatis.MybatisRowHandler;
import com.nexacro.spring.data.NexacroFirstRowHandler;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import nexacro.sample.service.NexacroLargeDataService;
import nexacro.sample.service.impl.jdbc.LargeDataJdbcDAO;
import nexacro.sample.service.impl.mybatis.LargeDataMybatisMapper;

/**
 * <pre>
 * @title   
 * @desc    제공 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        대용량 데이터 조회 ServiceImpl Sample Class
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
@Service("largeDataMybatisService")
public class LargeServiceMybatisImpl extends EgovAbstractServiceImpl implements NexacroLargeDataService {

    @Resource(name = "largeDataMybatisMapper")
    private LargeDataMybatisMapper largeDataMybatisMapper;
    
    @Resource(name = "largeDataJdbcDAO")
    private LargeDataJdbcDAO largeDataJdbcDAO;
    
    private static boolean isInited = false;
    
    @Override
    public void selectLargeData(NexacroFirstRowHandler firstRowHandler, String sendDataSetName, int firstRowCount, int initDataCount) {
        
        if(!isInited) {
            largeDataJdbcDAO.initData(initDataCount);
        }
        isInited = true;
        
        MybatisRowHandler rowHandler = new MybatisRowHandler(firstRowHandler, sendDataSetName, firstRowCount);
    	largeDataMybatisMapper.selectLargeData(rowHandler);
		rowHandler.sendRemainData();
        
    }

}
