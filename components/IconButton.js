 import { Pressable,StyleSheet} from 'react-native';
 import { Ionicons } from '@expo/vector-icons';

function IconButton({whenPressed,color,icon}) {
  return (
          <Pressable style={({pressed})=>[styles.btn,pressed && styles.pressedBtn ]} onPress={whenPressed} >
            <Ionicons name={icon} size={24} color={color} />
          </Pressable>
  )
}
  const styles=StyleSheet.create({
       btn:{
        marginRight:10
       },
       pressedBtn:{
        opacity:0.6
       }

  })

export default IconButton
