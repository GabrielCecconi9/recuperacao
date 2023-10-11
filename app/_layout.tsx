//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    
    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Tela do tecnico",
          title: "Tela do tecnico",
        }}
      />
      <Drawer.Screen
        name="telaA" 
        options={{
          drawerLabel: "Tela dos jogadores",
          title: "Tela dos jogadores",
        }}
      />
    </Drawer>

  );
}