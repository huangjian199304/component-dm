/**
 *
 *@since 2.0
 *@author zhiguo
 *@Date 2018/6/28 9:36
 */
import {BaseStore} from "./BaseStore";
import {ProjectConfig} from "../domain/ProjectConfig";

export class SettingStore extends BaseStore{

    //项目路径
    projectPathKey:string = 'projectPath';


    saveProjectPath(path: string): void{
        super.saveData(this.projectPathKey,path);
    }

    getProjectPath(): string {
        return super.getDataStr(this.projectPathKey);
    }



    /********** 获取素材项目文件路径 ********/
 
    getProjectConfigFilePath(): ProjectConfig {
        return  new ProjectConfig(this.getProjectPath());
    }

}