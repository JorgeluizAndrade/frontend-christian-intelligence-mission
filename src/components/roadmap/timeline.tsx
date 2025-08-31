"use client"
import { Dialog } from "@radix-ui/react-dialog"
import { motion } from "framer-motion"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

interface Conteudo {
  id: number
  nomeConteudo: string
  autor: string
  link: string
  descConteudo: string
}

interface SubTopic {
  id: number
  nome: string
  conteudos: Conteudo[]
  descTopic: string
}

interface Topic {
  id: number
  nome: string
  filhos: SubTopic[]
  conteudos: Conteudo[]
  descTopic: string
}

interface TimelineProps {
  topics: Topic[]
}

export default function Timeline({ topics }: TimelineProps) {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

        {topics.map((topic, i) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            <div className="relative">
              <div className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 border-4 border-white shadow-lg z-10"></div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{topic.nome}</h3>

                <Dialog>
                  <DialogTrigger className="text-blue-700 hover:text-blue-800">
                    Ver descrição do Topico
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{topic.nome}</DialogTitle>
                      <DialogDescription>
                        {topic.descTopic}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                {topic.conteudos.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {topic.conteudos.map((conteudo) => (
                      <motion.a
                        key={conteudo.id}
                        href={conteudo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-lg hover:shadow-md hover:border-blue-200 transition-all duration-200"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {conteudo.nomeConteudo}
                        </div>
                        <div className="text-sm text-yellow-600 mt-1">
                          {conteudo.descConteudo}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{conteudo.autor}</div>
                      </motion.a>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {topic.filhos.length > 0 && (
              <div className="ml-4 md:ml-8 space-y-6">
                {topic.filhos.map((sub, subIndex) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + subIndex * 0.05 }}
                    className="relative"
                  >
                    <div className="absolute -left-4 md:-left-8 top-6 w-4 md:w-8 h-0.5 bg-gray-200"></div>
                    <div className="absolute -left-4 md:-left-8 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-white shadow-sm"></div>

                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 md:p-5">
                      <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-700 mr-2"></span>
                        {sub.nome}
                      </h4>

                      <Dialog>
                        <DialogTrigger className="text-blue-700 hover:text-blue-800">
                          Ver descrição do Topico
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{sub.nome}</DialogTitle>
                            <DialogDescription>
                              {sub.descTopic}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>

                      {sub.conteudos.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {sub.conteudos.map((conteudo) => (
                            <motion.a
                              key={conteudo.id}
                              href={conteudo.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="group p-3 bg-white border border-gray-200 rounded-lg hover:shadow-sm hover:border-green-200 hover:bg-green-50 transition-all duration-200"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-green-700 transition-colors text-sm line-clamp-2">
                                {conteudo.nomeConteudo}
                              </div>
                              <div className="text-sm text-red-600 mt-1">
                                {conteudo.descConteudo}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{conteudo.autor}</div>
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
