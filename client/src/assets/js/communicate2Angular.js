// đây là các hàm giao tiếp với angular
// gọi từ angular/html/javascript/innerHTML sẽ bẫy đến các hàm này truyền tham số cho nó
// sau đó nó sẽ gọi hàm ngược lại trong angular
// phương pháp này giao tiếp các hàm javascript trên web để gọi các hàm đã viết trong file .ts của angular
// nhớ là khai báo nhúng file này trong file angular.json nhé
/**
 * "scripts": [
              "assets/js/communicate2Angular.js"
            ]
 * @param {*} username 
 */
function runAngularTs(username, type) {
    // alert(`Đây là user gọi từ innerHTLM: ${username}`)
    // window.angularComponentReference.zone.run(() => { window.angularComponentReference.loadAngularFunction(); });
    // gọi ngược lại hàm trong các trang angular -->
    window.angularComponentReference.zone.run(() => { window.angularComponentReference.loadAngularFunction(username, type); });
}
