import { createStackNavigator } from "@react-navigation/stack";
import { ChevronLeft } from "@tamagui/lucide-icons";

import AddNewPage from "../components/Screens/AddNewPage";
import AppPage from "../components/Screens/AppPage";
import LogInPage from "../components/Screens/LogInPage";

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTintColor: "#000"
      }}
    >
      <Stack.Screen
        name="LogInPage"
        component={LogInPage}
        options={{ title: <ChevronLeft /> }}
      />
      <Stack.Screen
        name="AppPage"
        component={AppPage}
        options={{ title: "App", headerLeft: null }}
      />
      <Stack.Screen
        name="SelectCategory"
        component={AddNewPage}
        options={{
          title: null
          // headerLeft: null
        }}
      />
    </Stack.Navigator>
  );
}
