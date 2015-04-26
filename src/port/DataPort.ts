interface IPoint{
	f:number;
	c:number;
}

interface ISupplePoint{
	x:number;
	y:number;
	value:IPoint;
}

interface IPointPos{
	x:number;
	y:number;
}

interface IDelRound{
	dpLst:IPointPos[];//删除点
	suppleLst:ISupplePoint[];//补充点
	combo:number;
}

interface IWeiXinData{
	appId:string;
	imgUrl:string;
	link:string;
	desc:string;
	title:string;
}