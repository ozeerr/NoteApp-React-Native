import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTE, MYNOTES, NOTEDETAIL, NOTEEDIT} from '../utils/routes';
import MyNotes from '../screens/MyNotes';
import AddNote from '../screens/addNote';
import APPCOLOR from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';
import NoteDetail from '../screens/noteDetail';
import EditNoteScreen from '../screens/editNote';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={MYNOTES}>
      <Stack.Screen
        name={MYNOTES}
        component={MyNotes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ADDNOTE}
        component={AddNote}
        options={{
          headerTintColor: APPCOLOR.GRAY,
          headerBackTitleVisible: false,
          headerRight: props => (
            <HeaderRight/>
          ),
        }}
      />
      <Stack.Screen
        name={NOTEDETAIL}
        component={NoteDetail}
        options={{
          headerTintColor:APPCOLOR.GRAY,
          headerBackTitleVisible:false
        }}
    
      />

      <Stack.Screen
        name={NOTEEDIT}
        component={EditNoteScreen}
        options={{
          headerTintColor:APPCOLOR.GRAY,
          headerBackTitleVisible:false
        }}
    
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
