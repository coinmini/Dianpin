import * as actionTypes from '../constants/userinfo'   //这个就是给用来放到dispatch里面的 触法， 做成了函数，对外暴露update这个函数名

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,   //对应reducer里面的 action.type   着两个就是dispatch里面要装的
        data                                    // 对应reducer里面的 actions.data
    }
}
