package nexacro.sample.service;

import java.util.List;
import java.util.Map;

import nexacro.sample.vo.UserVO;

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
public interface NexacroUserService {

    List<UserVO> selectUserVOList(UserVO searchInfo);
    List<Map<String,Object>> selectUserMapList(Map<String,String> searchInfo);
    void updateUserInfo(UserVO userInfo);
}
