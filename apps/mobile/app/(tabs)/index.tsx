import { View, Text, FlatList, Pressable } from 'react-native'
import { MapPin, DollarSign, Clock, Bell } from 'lucide-react-native'

type Job = {
  id: string
  tipo: string
  contratante: string
  bairro: string
  cidade: string
  valor: string
  descricao: string
  postedAt: string
}

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    tipo: 'Diarista',
    contratante: 'Família Santos',
    bairro: 'Jardim América',
    cidade: 'São Paulo',
    valor: 'R$ 150 / diária',
    descricao: 'Preciso de diarista quinzenalmente para limpeza geral. Inclui cozinha, banheiros e área de serviço.',
    postedAt: 'Agora há pouco',
  },
  {
    id: '2',
    tipo: 'Pintor',
    contratante: 'Construtora Horizonte',
    bairro: 'Vila Madalena',
    cidade: 'São Paulo',
    valor: 'A combinar',
    descricao: 'Pintura completa de apartamento de 80m². Tinta e materiais fornecidos pela empresa.',
    postedAt: 'Há 1 hora',
  },
  {
    id: '3',
    tipo: 'Eletricista',
    contratante: 'Comércio Alves & Filhos',
    bairro: 'Centro',
    cidade: 'Campinas',
    valor: 'R$ 80 / hora',
    descricao: 'Instalação de tomadas e luminárias em loja comercial. Serviço urgente, precisa de NR-10.',
    postedAt: 'Há 2 horas',
  },
  {
    id: '4',
    tipo: 'Babá',
    contratante: 'Família Rodrigues',
    bairro: 'Moema',
    cidade: 'São Paulo',
    valor: 'R$ 1.800 / mês',
    descricao: 'Babá para criança de 3 anos, período da manhã de segunda a sexta. Com experiência comprovada.',
    postedAt: 'Há 3 horas',
  },
  {
    id: '5',
    tipo: 'Pedreiro',
    contratante: 'Condomínio Rio Verde',
    bairro: 'Bela Vista',
    cidade: 'São Paulo',
    valor: 'R$ 200 / dia',
    descricao: 'Reforma em área comum do condomínio. Previsão de 15 dias de trabalho. Segunda a sábado.',
    postedAt: 'Há 5 horas',
  },
  {
    id: '6',
    tipo: 'Cuidador',
    contratante: 'Família Mendes',
    bairro: 'Santana',
    cidade: 'São Paulo',
    valor: 'A combinar',
    descricao: 'Cuidador para idoso de 78 anos. Período noturno, de segunda a sexta. Experiência com medicamentos.',
    postedAt: 'Há 8 horas',
  },
  {
    id: '7',
    tipo: 'Gesseiro',
    contratante: 'Construtora Nova Era',
    bairro: 'Lapa',
    cidade: 'São Paulo',
    valor: 'Por m²',
    descricao: 'Aplicação de gesso liso em 5 ambientes de residência nova. Aproximadamente 120m².',
    postedAt: 'Há 1 dia',
  },
]

export default function WorkerHomeScreen() {
  return (
    <View className="flex-1 bg-neutral-100 dark:bg-neutral-950">
      <FlatList
        data={MOCK_JOBS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard job={item} />}
        ListHeaderComponent={<Header count={MOCK_JOBS.length} />}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

function Header({ count }: { count: number }) {
  return (
    <>
      <View className="bg-brand-500 px-6 pb-8 pt-14">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-2xl font-bold text-white">Olá, Maria! 👋</Text>
            <Text className="mt-1 text-sm text-blue-100">Veja vagas próximas de você</Text>
          </View>
          <Pressable className="rounded-full bg-brand-700 p-2.5 active:opacity-70">
            <Bell size={20} color="white" />
          </Pressable>
        </View>
      </View>

      <Text className="mx-4 mb-3 mt-5 text-base font-bold text-neutral-800 dark:text-neutral-200">
        {count} vagas disponíveis
      </Text>
    </>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <View
      className="mx-4 mb-4 rounded-2xl bg-white p-4 dark:bg-neutral-800"
      style={{ elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.07, shadowRadius: 4 }}
    >
      <View className="flex-row items-center justify-between">
        <View className="rounded-full bg-brand-50 px-3 py-1">
          <Text className="text-xs font-semibold text-brand-500">{job.tipo}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <Clock size={11} color="#9ca3af" />
          <Text className="text-xs text-neutral-400">{job.postedAt}</Text>
        </View>
      </View>

      <Text className="mt-3 text-base font-bold text-neutral-900 dark:text-white">
        {job.contratante}
      </Text>

      <View className="mt-1.5 flex-row items-center gap-1.5">
        <MapPin size={13} color="#6b7280" />
        <Text className="text-sm text-neutral-500">
          {job.bairro}, {job.cidade}
        </Text>
      </View>

      <View className="mt-1 flex-row items-center gap-1.5">
        <DollarSign size={13} color="#6b7280" />
        <Text className="text-sm text-neutral-500">{job.valor}</Text>
      </View>

      <Text className="mt-2 text-sm leading-5 text-neutral-600 dark:text-neutral-400" numberOfLines={2}>
        {job.descricao}
      </Text>

      <Pressable className="mt-3 items-center rounded-xl bg-brand-500 py-2.5 active:opacity-80">
        <Text className="text-sm font-semibold text-white">Ver detalhes</Text>
      </Pressable>
    </View>
  )
}
