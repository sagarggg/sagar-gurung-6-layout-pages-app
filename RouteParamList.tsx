import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RouteParamList = {
    Home:undefined,
    Page1:undefined,
    Page2:undefined,
    Page3:undefined,
    Page4:undefined,
    Page5:undefined,
    Page6:undefined,
}

export type RouteStackParamList<T extends  keyof RouteParamList> = {
    navigation: StackNavigationProp<RouteParamList, T>;
    route: RouteProp<RouteParamList, T>;
}