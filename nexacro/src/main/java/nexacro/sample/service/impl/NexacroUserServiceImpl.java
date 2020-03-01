package nexacro.sample.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import nexacro.sample.service.NexacroUserService;
import nexacro.sample.service.impl.ibatis.UserDAO;
import nexacro.sample.vo.UserVO;

/**
 * 
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
@Service("userService")
public class NexacroUserServiceImpl extends EgovAbstractServiceImpl implements NexacroUserService {

    @Resource(name = "userDAO")
    // Name 정의
    private UserDAO userDAO;

    @Override
    public List<UserVO> selectUserVOList(UserVO searchVO) {
        return userDAO.selectUserVoList(searchVO);
    }
    
    @Override
    public List<Map<String, Object>> selectUserMapList(Map<String, String> searchInfo) {
    	return userDAO.selectUserMapList(searchInfo);
    }

    @Override
    public void updateUserInfo(UserVO userInfo) {

        if (userInfo instanceof DataSetRowTypeAccessor){
            DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) userInfo;
            if (accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
                userDAO.insertUserVO(userInfo);
            }
            else if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
                userDAO.updateUserVO(userInfo);
            }
            else if (accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
                userDAO.deleteUserVO(userInfo);
            }
        }
    }
}
