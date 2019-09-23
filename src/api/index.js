import ajax from './ajax'
import jsonp from 'jsonp'
import { message } from 'antd'

const Base = ''

export function reqLogin(username, password) {
  return ajax({
    method: 'post',
    url: "/login",
    data: {
      username,
      password
    }
  })
}

// jsonp
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    jsonp(url, {}, (err, data) => {
      if(!err && data.error === 0) {
        const { dayPictureUrl, weather } = data.results[0].weather_data[0]
        resolve({dayPictureUrl, weather});
      } else {
        message.error('获取天气信息失败')
      }
    });
  })
  
}

// 获取分类列表
// export const reqCategorys = () => ajax({
//   url: "/manage/category/list"
// })
export const reqCategorys = parentId =>
         {
          //  console.log("/src/api/index/parentId", parentId);
           return ajax(Base + "/manage/category/list", {params:{ parentId }})};

// 添加分类
export const reqAddCategory = (categoryName, parentId) =>
         ajax.post(Base + "/manage/category/add", { categoryName, parentId });

// 更新分类
export const reqUpdateCategory = ({categoryId,categoryName}) => {
  return ajax.post(Base + "/manage/category/update", {
    categoryId,
    categoryName
  });}

// 获取商品分页列表 productName/productDesc
export const reqProducts = (pageNum, pageSize) => ajax(Base + "/manage/product/list", {params: {
  pageNum,
  pageSize
}})

// 跟据 Name/ Desc 搜索藏品分页列表
export const reqSearchProducts = ({pageNum, pageSize, searchName, searchType}) => ajax(Base + '/manage/product/search', {
  params: {
    pageNum,
    pageSize,
    [searchType]: searchName,
  }
})

// 对商品进行上下架操作
export const reqUpdateStatus = (productId, status) => {
  return ajax.post(Base + '/manage/product/updateStatus', 
{
    productId,
    status
  }
)}

// 获取一个分类
export const reqCategory = categoryId =>
         ajax(Base + "/manage/category/info", { params: { categoryId } });

// 删除图片
export const reqDeleteImg = (name) => ajax.post(Base + '/manage/img/delete', {name})

// 添加/ 修改商品

export const reqAddUpdateProduct = (product) => ajax.post(Base + `/manage/product/${product._id ? "update" : "add"}`, product)

// 获取所有角色的列表
export const reqRoles = () => ajax(Base + '/manage/role/list')
// 添加角色
export const reqAddRole = (name) => ajax.post(Base + '/manage/role/add', {name})
// 更新role
export const reqUpdateRole = (role) => ajax.post(Base + '/manage/role/update', role)

// 获取用户列表
export const reqUsers = () => ajax(Base + '/manage/user/list')
// 删除
export const reqDeleteUsers = (userId) => ajax.post(Base + '/manage/user/delete', {userId})
// 添加
export const reqAddOrUpdateUsers = (user) => ajax.post(Base + '/manage/user/' + (user._id ? "update" : "add"), user)

