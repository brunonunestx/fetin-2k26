import { useState } from 'react'
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'

import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/button'

const PERSON_TYPES = ['Pessoa física', 'Empresa', 'Comércio', 'Condomínio']

const HIRE_TYPES = ['Diarista', 'Manutenção', 'Obras', 'Cuidados', 'Outros']

export default function ContractorRegisterScreen() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [tipoPessoa, setTipoPessoa] = useState('')
  const [tipoContrato, setTipoContrato] = useState<string[]>([])

  const isFormValid =
    nome.trim().length > 0 &&
    telefone.trim().length > 0 &&
    cidade.trim().length > 0 &&
    bairro.trim().length > 0 &&
    tipoPessoa.length > 0

  function toggleContrato(item: string) {
    setTipoContrato((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    )
  }

  return (
    <View className="flex-1 bg-white dark:bg-neutral-950">
      <View className="flex-row items-center gap-3 border-b border-neutral-100 px-6 pb-4 pt-14 dark:border-neutral-800">
        <Pressable onPress={() => router.back()} className="active:opacity-60">
          <ChevronLeft size={24} color="#3463ff" />
        </Pressable>
        <Text className="text-xl font-bold text-neutral-900 dark:text-white">Criar conta</Text>
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="mb-6 mt-6 text-sm text-neutral-500 dark:text-neutral-400">
          Preencha seus dados para encontrar profissionais perto de você.
        </Text>

        <FieldLabel label="Nome" required />
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Seu nome ou razão social"
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

        <FieldLabel label="Tipo de pessoa" required />
        <View className="mb-5 flex-row flex-wrap gap-2">
          {PERSON_TYPES.map((tipo) => (
            <Chip
              key={tipo}
              label={tipo}
              selected={tipoPessoa === tipo}
              onPress={() => setTipoPessoa(tipo)}
            />
          ))}
        </View>

        <FieldLabel label="O que costuma contratar" />
        <Text className="mb-3 text-xs text-neutral-400">Opcional — pode selecionar mais de um</Text>
        <View className="mb-5 flex-row flex-wrap gap-2">
          {HIRE_TYPES.map((tipo) => (
            <Chip
              key={tipo}
              label={tipo}
              selected={tipoContrato.includes(tipo)}
              onPress={() => toggleContrato(tipo)}
            />
          ))}
        </View>
      </ScrollView>

      <View className="border-t border-neutral-100 px-6 py-4 dark:border-neutral-800">
        <Button
          label="Entrar no app"
          size="lg"
          disabled={!isFormValid}
          onPress={() => router.replace('/(tabs)/contractor-home')}
        />
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
