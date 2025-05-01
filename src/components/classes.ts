export class OptionsSelect {
    constructor(
        public label: any,
        public value: any,
        public object: any,
    ) { }
}
export class Turma {
    constructor(
        public id: any,
        public representante: boolean,
        public professor: Professor,
        public disciplina: Disciplina,
        public turma: Turma,
        public anoLetivo: AnoLetivo
    ) { }
}

export class Disciplina {
    constructor(
        public id: any | null,
        public descricao: string | '',
        public abreviacao: string | '',
        public empresa: any
    ) { }

    // async add(records: Disciplina, callback: any) {
    //   try {
    //     let result: any = null;
    //     if (records.id == null)
    //       await makeRequest('POST', `/v1/pedagogico/disciplina/add`, true, records);
    //     else
    //       result = await makeRequest('PUT', `/v1/pedagogico/disciplina/update`, true, records);
    //     callback({ data: result, status: true, msg: 'Cadastro efetuado com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async listdisciplinas() {
    //   try {
    //     let result = await makeRequest('GET', `/v1/pedagogico/disciplina`, true);
    //     let anletivos = result.flatMap((d: Disciplina) => ({
    //       label: d.descricao,
    //       value: d.id,
    //       object: d
    //     }));
    //     return anletivos;
    //   } catch (error) {
    //     return []
    //   }
    // }
}

export class Professor {

    constructor(
        public id: any,
        public especialidade: string,
        public status: boolean,
        public funcionario: Funcionario
    ) { }

    // async add(records: any, callback: any) {
    //   try {
    //     let result = await makeRequest('POST', `/v1/pedagogico/professor/add`, true, records);
    //     callback({ data: result, status: true, msg: 'Cadastro efetuado com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async update(records: any, callback: any) {
    //   try {
    //     let result = await makeRequest('PUT', `/v1/pedagogico/professor/update`, true, records);
    //     callback({ data: result, status: true, msg: 'Atualização efetuada com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async listDisciplinasByTurma(profid: number, turmaid: number, callback: any) {
    //   let disc = await makeRequest('GET', `/v1/pedagogico/professor/${profid}/${turmaid}/disciplinas`, true) as Disciplina[];
    //   callback(disc);
    // }

    // async listTurmas(profid: number, callback: any) {
    //   let disc = await makeRequest('GET', `/v1/mobile/professor/id/${profid}/turmas`, true);
    //   callback(disc);
    // }

    // async getProfessor(id_user: number): Promise<Professor> {
    //   return await makeRequest('GET', `/v1/mobile/professor/by/${id_user}`, true) as Professor;
    // }

    // async professoresAtivos(empresaId: number) {
    //   return await makeRequest('GET', `/v1/pedagogico/professor/ativo/${empresaId}`, true);
    // }

    // async professores() {
    //   return await makeRequest('GET', `/v1/pedagogico/professor/all`, true);
    // }

    // async professorTurmas(professorId: number, anoletivoId: number) {
    //   return await makeRequest('GET', `/v1/pedagogico/profturdisciplina/by-professor/${professorId}/${anoletivoId}`, true);
    // }
}

export class AnoLetivo {
    constructor(
        public id: any | null,
        public descricao: string
    ) { }

    // async add(callback: any) {
    //   try {
    //     let result = await makeRequest('POST', `/v1/pedagogico/anoletivo/add`, true, this);
    //     callback({ data: result, status: true, msg: 'Cadastro efetuado com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async update(callback: any) {
    //   try {
    //     let result = await makeRequest('PUT', `/v1/pedagogico/anoletivo/update`, true, this);
    //     callback({ data: result, status: true, msg: 'Atualização efetuada com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async listr_anoletivos(): Promise<Opcoes[]> {
    //   const result = await makeRequest('GET', `/v1/pedagogico/anoletivo`, true) as AnoLetivo[];
    //   let anletivos = result.flatMap((p: AnoLetivo) => ({
    //     label: p.descricao,
    //     value: p.id,
    //     object: p,
    //   }));

    //   return anletivos;
    // }

    // async getanoletivo(): Promise<AnoLetivo> {
    //   const result = await makeRequest('GET', `/v1/pedagogico/anoletivo`, true) as AnoLetivo[];
    //   return result.find(a => a.descricao == getAnoLetivoAtual()) as AnoLetivo;
    // }

    // async listr_anoletivosL(): Promise<Opcoes[]> {
    //   const result = await makeRequest('GET', `/v1/pedagogico/anoletivo`, true) as AnoLetivo[];
    //   let anletivos = result.flatMap((p: AnoLetivo) => ({
    //     label: p.descricao,
    //     value: p.descricao,
    //     object: p,
    //   }));

    //   return anletivos;
    // }
}

export class Funcionario {
    constructor(
        public id: any,
        public codigo: string,
        public estado: "ATIVO" | "DESATIVO",
        public dataAdmissao: string,
        public cargo: any,
        public pessoa: any
    ) { }

    // async save(records: Funcionario, callback: any) {
    //   try {
    //     let result: any = null;
    //     if (records.id == null)
    //       result = await makeRequest('POST', `/v1/admin/funcionario/add`, true, records);
    //     else
    //       result = await makeRequest('PUT', `/v1/admin/funcionario/update`, true, records);
    //     callback({ data: result, list: await this.listFuncionarios(), status: true, msg: 'Cadastro efetuado com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, list: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async listDisciplinasByTurma(profid: number, turmaid: number, callback: any) {
    //   let disc = await makeRequest('GET', `/v1/pedagogico/professor/${profid}/${turmaid}/disciplinas`, true) as Disciplina[];
    //   callback(disc);
    // }

    // async listFuncionarios(): Promise<Funcionario[]> {
    //   return await makeRequest('GET', `/v1/admin/funcionario/all`, true);
    // }
}

export class Aluno {
    constructor(
        public id: any,
        public nome: string,
        public identificador: string,
        public idade: string,
        public genero: string,
        public contacto: string,
        public responsavel: string,
        public turma: string
    ) { }
}

export class MiniPauta {
    id: any | null = null;
    ca: any = 0;
    cf: any = 0;
    mac1: any = 0.0;
    mac2: any = 0.0;
    mac3: any = 0.0;
    mt1: any = 0;
    mt2: any = 0;
    mt3: any = 0;
    pg: any = 0;
    pp11: any = 0.0;
    pp12: any = 0.0;
    pp21: any = 0.0;
    pp22: any = 0.0;
    pp31: any = 0.0;
    pp32: any = 0.0;
    pt1: any = 0.0;
    pt2: any = 0.0;
    pt3: any = 0.0;
    recurso: any = 0;
    disciplinaId: number | null = null;
    matriculaId: number | null = null;
    professorId: number | null = null;
    turmaId: number | null = null;

    constructor(init?: Partial<MiniPauta>) {
        Object.assign(this, init);
    }
}

export class AvaliacaoDto {
    constructor(
        public nota: number,
        public trimestre: 'Iº TRIMESTRE' | 'IIº TRIMESTRE' | 'IIIº TRIMESTRE',
        public data: any,
        public obs: string,
        public disciplina: Disciplina
    ) { }
}

export class Avaliacao {
    constructor(
        public id: any,
        public avaliacoes: any,
        public matriculaId: number,
        public professorId: number
    ) { }
}

export class Falta {
    constructor(
        public id: number | null,
        public faltas: string,
        public matriculaId: number,
        public professorId: number
    ) { }
}

export class FaltaDto {
    constructor(
        public qtdfalta: number,
        public trimestre: 'Iº TRIMESTRE' | 'IIº TRIMESTRE' | 'IIIº TRIMESTRE',
        public data: string,
        public obs: string,
        public disciplina: Disciplina
    ) { }
}

    // async add(callback: any) {
    //   try {
    //     let result = await makeRequest('POST', `/v1/avaliacao/add`, true, this);
    //     callback({ data: result, status: true, msg: 'Cadastro efetuado com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async update(callback: any) {
    //   try {
    //     let result = await makeRequest('PUT', `/v1/avaliacao/update`, true, this);
    //     callback({ data: result, status: true, msg: 'Atualização efetuada com sucesso.' });
    //   } catch (error) {
    //     callback({ data: null, status: false, msg: `Erro: ${error}` });
    //   }
    // }

    // async listAll(id: number) {
    //   return await makeRequest('GET', `/v1/avaliacao/${id}`, true);
    // }