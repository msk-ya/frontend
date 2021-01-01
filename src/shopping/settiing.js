/*当日日付のみ表示するための分岐処理*/

export const viewDataBranch = (date)=>{
  /*本日*/

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  /*注文データ*/

  const createDate = new Date(date);
  const c_year = createDate.getFullYear();
  const c_month = createDate.getMonth() + 1;
  const c_day = createDate.getDate();

  /*照合*/
  if( year === c_year && month === c_month && day === c_day){
     return 1;
  }
  else{
     return 0;
  }

}