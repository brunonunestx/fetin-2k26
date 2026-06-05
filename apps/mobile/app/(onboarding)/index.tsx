import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Briefcase, Search } from 'lucide-react-native'

export default function TypeSelectionScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-neutral-950">
      <View className="items-center bg-brand-500 px-6 pb-16 pt-20">
        <Text className="text-4xl font-bold text-white">Trampo Fácil</Text>
        <Text className="mt-2 text-center text-sm text-blue-100">
          Conectando trabalhadores e contratantes
        </Text>
      </View>

      <View className="flex-1 gap-4 px-6 pt-10">
        <Text className="mb-2 text-center text-xl font-semibold text-neutral-800 dark:text-white">
          Como você quer usar o app?
        </Text>

        <Pressable
          className="items-center gap-3 rounded-2xl bg-brand-500 p-8 active:opacity-80"
          onPress={() => router.push('/(onboarding)/worker-register')}
        >
          <Briefcase size={40} color="white" />
          <Text className="text-2xl font-bold text-white">Quero trabalhar</Text>
          <Text className="text-center text-sm text-blue-100">
            Crie seu perfil e seja encontrado por quem precisa de você
          </Text>
        </Pressable>

        <Pressable
          className="items-center gap-3 rounded-2xl border-2 border-brand-500 bg-white p-8 active:opacity-80 dark:bg-neutral-900"
          onPress={() => router.push('/(onboarding)/contractor-register')}
        >
          <Search size={40} color="#3463ff" />
          <Text className="text-2xl font-bold text-brand-500">Quero contratar</Text>
          <Text className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            Encontre profissionais qualificados perto de você
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
