import { View } from 'react-native'

import { Button } from '@/src/components/ui/button'

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white px-6 dark:bg-neutral-950">
      <Button label="Botão padrão" />
      <Button label="Secundário" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
    </View>
  )
}
