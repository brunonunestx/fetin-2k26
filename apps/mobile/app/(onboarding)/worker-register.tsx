import { useState } from 'react'
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { ChevronLeft, Camera } from 'lucide-react-native'

import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/button'

const SERVICE_TYPES = [
  'Diarista',
  'Pedreiro',
  'Gesseiro',
  'Pintor',
  'Eletricista',
  'Cuidador',
  'Babá',
  'Outros',
]

const AVAILABILITY_OPTIONS = [
  'Segunda a sexta',
  'Finais de semana',
  'Manhã',
  'Tarde',
  'Noite',
  'A combinar',
]

const RATE_OPTIONS = ['Valor fixo', 'Por diária', 'Por hora', 'A combinar']

export default function WorkerRegisterScreen() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [tipoServico, setTipoServico] = useState<string[]>([])
  const [experiencia, setExperiencia] = useState('')
  const [disponibilidade, setDisponibilidade] = useState<string[]>([])
  const [tipoValor, setTipoValor] = useState('')
  const [descricao, setDescricao] = useState('')

  function toggleMulti(list: string[], item: string, set: (v: string[]) => void) {
    set(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])
  }

  return (
    <View className="flex-1 bg-white dark:bg-neutral-950">
      <View className="flex-row items-center gap-3 border-b border-neutral-100 px-6 pb-4 pt-14 dark:border-neutral-800">
        <Pressable onPress={() => router.back()} className="active:opacity-60">
          <ChevronLeft size={24} color="#3463ff" />
        </Pressable>
        <Text className="text-xl font-bold text-neutral-900 dark:text-white">Criar meu perfil</Text>
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="my-6 items-center">
          <Pressable className="h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-brand-500 bg-brand-50 active:opacity-70">
            <Camera size={28} color="#3463ff" />
            <Text className="mt-1 text-xs text-brand-500">Adicionar foto</Text>
          </Pressable>
          <Text className="mt-2 text-xs text-neutral-400">Opcional</Text>
        </View>

        <FieldLabel label="Nome" required />
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Seu nome completo"
          placeholderTextColor="#9ca3af"
          className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />

        <FieldLabel label="Telefone / WhatsApp" required />
        <TextInput
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#9ca3af"
          keyboardType="phone-pad"
          className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />

        <FieldLabel label="Cidade" required />
        <TextInput
          value={cidade}
          onChangeText={setCidade}
          placeholder="Ex: São Paulo"
          placeholderTextColor="#9ca3af"
          className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />

        <FieldLabel label="Bairro" required />
        <TextInput
          value={bairro}
          onChangeText={setBairro}
          placeholder="Ex: Centro"
          placeholderTextColor="#9ca3af"
          className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />

        <FieldLabel label="Tipo de serviço" required />
        <View className="mb-5 flex-row flex-wrap gap-2">
          {SERVICE_TYPES.map((tipo) => (
            <Chip
              key={tipo}
              label={tipo}
              selected={tipoServico.includes(tipo)}
              onPress={() => toggleMulti(tipoServico, tipo, setTipoServico)}
            />
          ))}
        </View>

        <FieldLabel label="Experiência" />
        <TextInput
          value={experiencia}
          onChangeText={setExperiencia}
          placeholder={'Ex: "Trabalho há 3 anos como diarista"'}
          placeholderTextColor="#9ca3af"
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          style={{ minHeight: 80 }}
        />

        <FieldLabel label="Disponibilidade" required />
        <View className="mb-5 flex-row flex-wrap gap-2">
          {AVAILABILITY_OPTIONS.map((opcao) => (
            <Chip
              key={opcao}
              label={opcao}
              selected={disponibilidade.includes(opcao)}
              onPress={() => toggleMulti(disponibilidade, opcao, setDisponibilidade)}
            />
          ))}
        </View>

        <FieldLabel label="Valor" required />
        <View className="mb-5 flex-row flex-wrap gap-2">
          {RATE_OPTIONS.map((opcao) => (
            <Chip
              key={opcao}
              label={opcao}
              selected={tipoValor === opcao}
              onPress={() => setTipoValor(opcao)}
            />
          ))}
        </View>

        <FieldLabel label="Descrição curta" />
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder={'Ex: "Faço faxina, organização e passo roupa."'}
          placeholderTextColor="#9ca3af"
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          style={{ minHeight: 80 }}
        />
      </ScrollView>

      <View className="border-t border-neutral-100 px-6 py-4 dark:border-neutral-800">
        <Button label="Criar meu perfil" size="lg" />
      </View>
    </View>
  )
}

function FieldLabel({ label, required = false }: { label: string; required?: boolean }) {
  return (
    <Text className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
      {label}
      {required && <Text className="text-red-500"> *</Text>}
    </Text>
  )
}

function Chip({
  label,
  selected,
  onPress,
}: {
  label: string
  selected: boolean
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'rounded-full border px-4 py-2 active:opacity-80',
        selected
          ? 'border-brand-500 bg-brand-500'
          : 'border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900',
      )}
    >
      <Text
        className={cn(
          'text-sm font-medium',
          selected ? 'text-white' : 'text-neutral-700 dark:text-neutral-300',
        )}
      >
        {label}
      </Text>
    </Pressable>
  )
}
