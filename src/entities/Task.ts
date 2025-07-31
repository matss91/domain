export interface Task{
id:string,
title:string,
description:string,
IsCompleted:Boolean,
createdAt:Date,
completedAt?:Date,
visible:Boolean,
userId:string,


}