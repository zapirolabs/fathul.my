<template>
  <div class="min-h-screen bg-background">
    <ProgramHeader />
    <KriteriaPemohon />
    <ApaYangAndaPerolehi />
    <ProgramYangDitawarkan />
    <SiapaPatutMemohon />

    <!-- Form Section -->
    <div class="bg-card py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-sm font-bold text-card-foreground mb-4">
            Borang Permohonan
          </h2>
          <p class="text-sm text-muted-foreground max-w-2xl mx-auto">
            Sila lengkapkan maklumat berikut untuk memohon program ini
          </p>
        </div>


        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Pahang Connection Card -->
          <Card>
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground">
                  Apakah kaitan anda dengan negeri Pahang?
                  <span class="text-destructive">*</span>
                </CardTitle>
                <RadioGroup v-model="form.pahangConnection" class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="born-pahang" value="born-pahang" />
                    <Label for="born-pahang" class="text-sm">Saya dilahirkan di Pahang</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="living-pahang" value="living-pahang" />
                    <Label for="living-pahang" class="text-sm">Saya sedang menetap di Pahang</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="parents-pahang" value="parents-pahang" />
                    <Label for="parents-pahang" class="text-sm">Kedua-dua ibu bapa saya berasal dari Pahang</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="other-pahang" value="other-pahang" />
                    <Label for="other-pahang" class="text-sm">Lain-lain:</Label>
                    <Input v-if="form.pahangConnection === 'other-pahang'" v-model="form.pahangConnectionOther"
                      placeholder="Sila nyatakan..." class="max-w-md" />
                  </div>
                  <div v-if="form.pahangConnection === 'other-pahang' && form.errors.pahangConnectionOther"
                    class="ml-6">
                    <p class="text-sm text-destructive mt-1">
                      {{ form.errors.pahangConnectionOther }}
                    </p>
                  </div>
                </RadioGroup>

                <p v-if="form.errors.pahangConnection" class="text-sm text-destructive">
                  {{ form.errors.pahangConnection }}
                </p>
              </div>
            </CardContent>
          </Card>
          <!-- Full Name -->
          <div class="space-y-3">
            <CardTitle class="text-card-foreground">
              Nama Penuh
              <span class="text-destructive">*</span>
            </CardTitle>
            <Input v-model="form.fullName" type="text" placeholder="Masukkan nama penuh anda" class="w-full" />
            <p v-if="form.errors.fullName" class="text-sm text-destructive">
              {{ form.errors.fullName }}
            </p>
          </div>

          <!-- Phone Number -->
          <div class="space-y-3">
            <CardTitle class="text-card-foreground">
              Nombor Telefon
              <span class="text-destructive">*</span>
            </CardTitle>
            <Input v-model="form.phoneNumber" type="tel" placeholder="Contoh: 012-3456789" class="w-full" />
            <p v-if="form.errors.phoneNumber" class="text-sm text-destructive">
              {{ form.errors.phoneNumber }}
            </p>
          </div>

          <!-- Email -->
          <div class="space-y-3">
            <CardTitle class="text-card-foreground">
              Alamat Emel
              <span class="text-destructive">*</span>
            </CardTitle>
            <Input v-model="form.email" type="email" placeholder="contoh@email.com" class="w-full" />
            <p v-if="form.errors.email" class="text-sm text-destructive">
              {{ form.errors.email }}
            </p>
          </div>

          <!-- Age -->
          <div class="space-y-3">
            <CardTitle class="text-card-foreground">
              Umur
              <span class="text-destructive">*</span>
            </CardTitle>
            <Input v-model="form.age" type="number" placeholder="Masukkan umur anda (18-35 tahun)" min="18" max="35"
              class="w-full" />
            <p v-if="form.errors.age" class="text-sm text-destructive">
              {{ form.errors.age }}
            </p>
          </div>

          <!-- Interview Willingness Card -->
          <Card>
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground">
                  Adakah anda bersedia untuk ditemuduga terlebih dahulu sebelum diterima ke dalam program?
                  <span class="text-destructive">*</span>
                </CardTitle>
                <RadioGroup v-model="form.interviewWillingness" class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="interview-yes" value="yes" />
                    <Label for="interview-yes" class="text-sm">Ya</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="interview-no" value="no" />
                    <Label for="interview-no" class="text-sm">Tidak</Label>
                  </div>
                </RadioGroup>

                <p v-if="form.errors.interviewWillingness" class="text-sm text-destructive">
                  {{ form.errors.interviewWillingness }}
                </p>
              </div>
            </CardContent>
          </Card>

          <!-- Registration Reasons Card -->
          <Card>
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground">
                  Apakah sebab utama anda mendaftar?
                  <span class="text-destructive">*</span>
                </CardTitle>
                <div class="space-y-5">
                  <div class="flex items-center space-x-2">
                    <Checkbox id="upskill" :model-value="isReasonSelected('upskill')"
                      @update:model-value="(checked) => handleRegistrationReasonChange('upskill', checked)" />
                    <Label for="upskill" class="text-sm">Untuk meningkatkan kemahiran dan mempelajari sesuatu yang
                      baru</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Checkbox id="certificate" :model-value="isReasonSelected('certificate')"
                      @update:model-value="(checked) => handleRegistrationReasonChange('certificate', checked)" />
                    <Label for="certificate" class="text-sm">Untuk mendapatkan sijil yang diiktiraf</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Checkbox id="job" :model-value="isReasonSelected('job')"
                      @update:model-value="(checked) => handleRegistrationReasonChange('job', checked)" />
                    <Label for="job" class="text-sm">Untuk meningkatkan peluang mendapat pekerjaan</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Checkbox id="other-reason" :model-value="isReasonSelected('other')"
                      @update:model-value="(checked) => handleRegistrationReasonChange('other', checked)" />
                    <Label for="other-reason" class="text-sm">Lain-lain:</Label>
                    <Input v-if="isReasonSelected('other')" v-model="form.registrationReasonsOther"
                      placeholder="Sila nyatakan..." class="max-w-md" />
                  </div>
                  <div v-if="isReasonSelected('other') && form.errors.registrationReasonsOther" class="ml-6">
                    <p class="text-sm text-destructive mt-1">
                      {{ form.errors.registrationReasonsOther }}
                    </p>
                  </div>
                </div>

                <p v-if="form.errors.registrationReasons" class="text-sm text-destructive">
                  {{ form.errors.registrationReasons }}
                </p>
              </div>
            </CardContent>
          </Card>

          <!-- Commitment Level Card -->
          <Card>
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground">
                  Adakah anda bersedia untuk komited dengan latihan selama 1 bulan ini?
                  <span class="text-destructive">*</span>
                </CardTitle>
                <RadioGroup v-model="form.commitmentLevel" class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="fully-committed" value="fully-committed" />
                    <Label for="fully-committed" class="text-sm">Ya, saya komited sepenuhnya</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="need-info" value="need-info" />
                    <Label for="need-info" class="text-sm">Saya memerlukan lebih banyak maklumat sebelum membuat
                      keputusan</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="not-sure" value="not-sure" />
                    <Label for="not-sure" class="text-sm">Tidak pasti</Label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RadioGroupItem id="other-commitment" value="other-commitment" />
                    <Label for="other-commitment" class="text-sm">Lain-lain:</Label>
                    <Input v-if="form.commitmentLevel === 'other-commitment'" v-model="form.commitmentLevelOther"
                      placeholder="Sila nyatakan..." class="max-w-md" />
                  </div>
                  <div v-if="form.commitmentLevel === 'other-commitment' && form.errors.commitmentLevelOther"
                    class="ml-6">
                    <p class="text-sm text-destructive mt-1">
                      {{ form.errors.commitmentLevelOther }}
                    </p>
                  </div>
                </RadioGroup>

                <p v-if="form.errors.commitmentLevel" class="text-sm text-destructive">
                  {{ form.errors.commitmentLevel }}
                </p>
              </div>
            </CardContent>
          </Card>

          <!-- Program Interest Card -->
          <Card>
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground">
                  Apakah program yang anda minati?
                  <span class="text-destructive">*</span>
                </CardTitle>
                
                <!-- Single Program Selection -->
                <div v-if="form.programInterest !== 'more-than-one'">
                  <RadioGroup v-model="form.programInterest" class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="python-basic" value="python-basic" />
                      <Label for="python-basic" class="text-sm flex items-center space-x-2">
                        <img :src="pythonLogoUrl" alt="Python Logo" class="w-8 h-6" />
                        <span>Python Basic Programming</span>
                      </Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="genai-masterclass" value="genai-masterclass" />
                      <Label for="genai-masterclass" class="text-sm flex items-center space-x-2">
                        <img :src="chatGptLogoUrl" alt="ChatGPT Logo" class="w-8 h-6" />
                        <span>GenAI Masterclass</span>
                      </Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="aws-foundational" value="aws-foundational" />
                      <Label for="aws-foundational" class="text-sm flex items-center space-x-2">
                        <img :src="awsLogoUrl" alt="AWS Logo" class="w-8 h-6" />
                        <span>AWS Foundational Certificate</span>
                      </Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="more-than-one" value="more-than-one" />
                      <Label for="more-than-one" class="text-sm">Lebih daripada 1 program</Label>
                    </div>
                  </RadioGroup>
                </div>

                <!-- Multiple Program Selection -->
                <div v-else class="space-y-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    @click="form.programInterest = ''"
                    class="text-sm"
                  >
                    ← Kembali ke pilihan tunggal
                  </Button>
                  
                  <div class="border-t pt-4 space-y-3">
                    <p class="text-sm font-medium text-card-foreground">
                      Pilih program yang anda minati:
                      <span class="text-destructive">*</span>
                    </p>
                    <div class="space-y-3">
                      <div class="flex items-center space-x-2">
                        <Checkbox 
                          id="multi-python" 
                          :model-value="isProgramSelected('python-basic')"
                          @update:model-value="(checked) => handleProgramChange('python-basic', checked)"
                        />
                        <Label for="multi-python" class="text-sm flex items-center space-x-2">
                          <img :src="pythonLogoUrl" alt="Python Logo" class="w-8 h-6" />
                          <span>Python Basic Programming</span>
                        </Label>
                      </div>
                      <div class="flex items-center space-x-2">
                        <Checkbox 
                          id="multi-genai" 
                          :model-value="isProgramSelected('genai-masterclass')"
                          @update:model-value="(checked) => handleProgramChange('genai-masterclass', checked)"
                        />
                        <Label for="multi-genai" class="text-sm flex items-center space-x-2">
                          <img :src="chatGptLogoUrl" alt="ChatGPT Logo" class="w-8 h-6" />
                          <span>GenAI Masterclass</span>
                        </Label>
                      </div>
                      <div class="flex items-center space-x-2">
                        <Checkbox 
                          id="multi-aws" 
                          :model-value="isProgramSelected('aws-foundational')"
                          @update:model-value="(checked) => handleProgramChange('aws-foundational', checked)"
                        />
                        <Label for="multi-aws" class="text-sm flex items-center space-x-2">
                          <img :src="awsLogoUrl" alt="AWS Logo" class="w-8 h-6" />
                          <span>AWS Foundational Certificate</span>
                        </Label>
                      </div>
                    </div>
                    
                    <p v-if="form.errors.selectedPrograms" class="text-sm text-destructive">
                      {{ form.errors.selectedPrograms }}
                    </p>
                  </div>
                </div>

                <p v-if="form.errors.programInterest" class="text-sm text-destructive">
                  {{ form.errors.programInterest }}
                </p>
              </div>
            </CardContent>
          </Card>

          <!-- Python Program Details Card (Dynamic) -->
          <Card v-if="form.programInterest === 'python-basic' || (form.programInterest === 'more-than-one' && isProgramSelected('python-basic'))">
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground flex items-center space-x-2">
                  <img :src="pythonLogoUrl" alt="Python Logo" class="w-8 h-6" />
                  <span>Python Basic Programming</span>
                </CardTitle>

                <Accordion type="single" collapsible class="w-full">
                  <AccordionItem value="description">
                    <AccordionTrigger class="text-left text-sm">
                      Pengenalan Program
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardDescription class="text-muted-foreground">
                        Bootcamp intensif selama 4 minggu ini membolehkan anda menguasai kemahiran
                        pemprograman Python, automasi, dan pembangunan API yang diperlukan oleh industri
                        teknologi masa kini. Disusun khas untuk mereka yang ingin memulakan atau menukar
                        kerjaya ke bidang teknologi.
                      </CardDescription>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="what-you-get">
                    <AccordionTrigger class="text-left text-sm">
                      Apa Yang Anda Akan Perolehi
                    </AccordionTrigger>
                    <AccordionContent>
                      <div class="space-y-3 text-muted-foreground">
                        <div>
                          <strong>Asas & Lanjutan Python:</strong> Programming berorientasikan object, debugging, dan
                          optimization.
                        </div>
                        <div>
                          <strong>Pembangunan API & Database Integration:</strong> Membina RESTful API, web scraping,
                          dan bekerja dengan pelbagai database.
                        </div>
                        <div>
                          <strong>Business Automation:</strong> Scripting untuk proses sebenar.
                        </div>
                        <div>
                          <strong>Portfolio Project Industry:</strong> Real-world coding challenges & projects for
                          career showcase.
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="course-outline">
                    <AccordionTrigger class="text-left text-sm">
                      Rangka Kursus (4 Minggu)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div class="space-y-3 text-muted-foreground">
                        <div>
                          <strong>Minggu 1:</strong> Asas Python, OOP & Debugging
                        </div>
                        <div>
                          <strong>Minggu 2:</strong> Pembangunan API, Integrasi Pangkalan Data, Web Scraping
                        </div>
                        <div>
                          <strong>Minggu 3:</strong> Struktur Data Lanjutan, Automasi & Cabaran Pengaturcaraan
                        </div>
                        <div>
                          <strong>Minggu 4:</strong> Projek Capstone, Bengkel Portfolio & Persediaan Temuduga
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div class="space-y-5">
                  <CardTitle class="text-card-foreground">
                    Intake Batch
                    <span class="text-destructive">*</span>
                  </CardTitle>
                  <RadioGroup v-model="form.intakeBatch" class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="batch-1" value="batch-1" />
                      <Label for="batch-1" class="text-sm">Batch 1</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="batch-2" value="batch-2" />
                      <Label for="batch-2" class="text-sm">Batch 2</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="batch-3" value="batch-3" />
                      <Label for="batch-3" class="text-sm">Batch 3</Label>
                    </div>
                  </RadioGroup>

                  <p v-if="form.errors.intakeBatch" class="text-sm text-destructive">
                    {{ form.errors.intakeBatch }}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- GenAI Masterclass Program Details Card (Dynamic) -->
          <Card v-if="form.programInterest === 'genai-masterclass' || (form.programInterest === 'more-than-one' && isProgramSelected('genai-masterclass'))">
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground flex items-center space-x-2">
                  <img :src="chatGptLogoUrl" alt="ChatGPT Logo" class="w-8 h-6" />
                  <span>GenAI Masterclass</span>
                </CardTitle>

                <Accordion type="single" collapsible class="w-full">
                  <AccordionItem value="description">
                    <AccordionTrigger class="text-left text-sm">
                      Pengenalan Program
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardDescription class="text-muted-foreground">
                        GEN AI Masterclass ialah program intensif selama 4 minggu yang direka untuk 
                        melengkapkan peserta dengan kemahiran AI automasi, kejuruteraan prompt, dan 
                        pengoptimuman aliran kerja yang sangat diperlukan oleh industri moden. Sesuai untuk 
                        mereka yang ingin menembusi atau melonjak kerjaya dalam bidang AI yang pesat 
                        berkembang.
                      </CardDescription>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="what-you-get">
                    <AccordionTrigger class="text-left text-sm">
                      Apa Yang Anda Akan Perolehi
                    </AccordionTrigger>
                    <AccordionContent>
                      <div class="space-y-3 text-muted-foreground">
                        <div>
                          <strong>Kemahiran AI Praktikal:</strong> Latihan langsung dengan alat Generative AI seperti 
                          ChatGPT dan Stable Diffusion.
                        </div>
                        <div>
                          <strong>Kejuruteraan Prompt:</strong> Teknik membina prompt yang berkesan dan automasi 
                          kandungan perniagaan.
                        </div>
                        <div>
                          <strong>Automasi Aliran Kerja:</strong> Aplikasi AI untuk pemasaran, sumber manusia, kewangan 
                          dan pelbagai sektor lain.
                        </div>
                        <div>
                          <strong>Etika & AI Bertanggungjawab:</strong> Cara melaksanakan AI secara beretika dan patuh 
                          peraturan.
                        </div>
                        <div>
                          <strong>Projek Capstone:</strong> Selesaikan cabaran perniagaan sebenar dengan bimbingan 
                          portfolio dan kerjaya.
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="course-outline">
                    <AccordionTrigger class="text-left text-sm">
                      Rangka Kursus (4 Minggu)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div class="space-y-3 text-muted-foreground">
                        <div>
                          <strong>Minggu 1:</strong> Asas Generative AI & Pengenalan Alat Industri
                        </div>
                        <div>
                          <strong>Minggu 2:</strong> Kejuruteraan Prompt, Penjanaan Kandungan & Automasi
                        </div>
                        <div>
                          <strong>Minggu 3:</strong> Kajian Kes, Penggunaan AI dalam Proses Perniagaan, Etika AI
                        </div>
                        <div>
                          <strong>Minggu 4:</strong> Projek Capstone, Penilaian Portfolio & Persediaan Kerjaya
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div class="space-y-5">
                  <CardTitle class="text-card-foreground">
                    Intake Batch
                    <span class="text-destructive">*</span>
                  </CardTitle>
                  <RadioGroup v-model="form.intakeBatch" class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="genai-batch-2" value="batch-2" />
                      <Label for="genai-batch-2" class="text-sm">Batch 2</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="genai-batch-3" value="batch-3" />
                      <Label for="genai-batch-3" class="text-sm">Batch 3</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="genai-batch-4" value="batch-4" />
                      <Label for="genai-batch-4" class="text-sm">Batch 4</Label>
                    </div>
                  </RadioGroup>

                  <p v-if="form.errors.intakeBatch" class="text-sm text-destructive">
                    {{ form.errors.intakeBatch }}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- AWS Foundational Certificate Program Details Card (Dynamic) -->
          <Card v-if="form.programInterest === 'aws-foundational' || (form.programInterest === 'more-than-one' && isProgramSelected('aws-foundational'))">
            <CardContent class="p-6">
              <div class="space-y-5">
                <CardTitle class="text-card-foreground flex items-center space-x-2">
                  <img :src="awsLogoUrl" alt="AWS Logo" class="w-8 h-6" />
                  <span>AWS Foundational Certificate</span>
                </CardTitle>

                <Accordion type="single" collapsible class="w-full">
                  <AccordionItem value="description">
                    <AccordionTrigger class="text-left text-sm">
                      Pengenalan Program
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardDescription class="text-muted-foreground">
                        Program 4 minggu yang mempersiapkan anda dengan kemahiran cloud computing, 
                        keselamatan, automasi dan DevOps berasaskan AWS – platform awan nombor satu dunia. 
                        Dapatkan pensijilan AWS dan bersedia untuk kerjaya teknologi awan yang berdaya saing 
                        tinggi.
                      </CardDescription>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="what-you-get">
                    <AccordionTrigger class="text-left text-sm">
                      Apa Yang Anda Akan Perolehi
                    </AccordionTrigger>
                    <AccordionContent>
                      <div class="space-y-3 text-muted-foreground">
                        <div>
                          <strong>Asas & Lanjutan AWS:</strong> Pengenalan mendalam AWS, seni bina awan, keselamatan 
                          dan servis teras.
                        </div>
                        <div>
                          <strong>Kemahiran Hands-On AWS:</strong> Sediakan dan urus infrastruktur awan, laksana 
                          amalan keselamatan terbaik, serta penggunaan DevOps.
                        </div>
                        <div>
                          <strong>Automasi & DevOps:</strong>  Infrastructure as Code, CI/CD pipeline & automasi cloud.
                        </div>
                        <div>
                          <strong>Persediaan Pensijilan:</strong> Latihan projek sebenar dan strategi peperiksaan AWS 
                          Cloud Practitioner & Solutions Architect.
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="course-outline">
                    <AccordionTrigger class="text-left text-sm">
                      Rangka Kursus (4 Minggu)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div class="space-y-3 text-muted-foreground">
                        <div>
                          <strong>Minggu 1:</strong> Pengenalan AWS, Asas Cloud & Servis Teras
                        </div>
                        <div>
                          <strong>Minggu 2:</strong> Seni Bina AWS, Amalan Keselamatan & Pengurusan Identiti
                        </div>
                        <div>
                          <strong>Minggu 3:</strong> Automasi, DevOps & Deployment Cloud Sebenar
                        </div>
                        <div>
                          <strong>Minggu 4:</strong> Projek Capstone Cloud, Latihan Persijilan & Persediaan Kerjaya
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div class="space-y-5">
                  <CardTitle class="text-card-foreground">
                    Intake Batch
                    <span class="text-destructive">*</span>
                  </CardTitle>
                  <RadioGroup v-model="form.intakeBatch" class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="aws-batch-1" value="batch-1" />
                      <Label for="aws-batch-1" class="text-sm">Batch 1</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="aws-batch-2" value="batch-2" />
                      <Label for="aws-batch-2" class="text-sm">Batch 2</Label>
                    </div>
                    <div class="flex items-center space-x-2">
                      <RadioGroupItem id="aws-batch-3" value="batch-3" />
                      <Label for="aws-batch-3" class="text-sm">Batch 3</Label>
                    </div>
                  </RadioGroup>

                  <p v-if="form.errors.intakeBatch" class="text-sm text-destructive">
                    {{ form.errors.intakeBatch }}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Further Inquiries -->
          <div class="space-y-3">
            <CardTitle class="text-card-foreground">
              Further Inquiries
            </CardTitle>
            <Textarea 
              v-model="form.furtherInquiries" 
              placeholder="Any questions or additional information you'd like to share (optional)" 
              class="w-full min-h-[100px]" 
            />
            <p v-if="form.errors.furtherInquiries" class="text-sm text-destructive">
              {{ form.errors.furtherInquiries }}
            </p>
          </div>

          <!-- Submit Button Card -->
          <Card>
            <CardContent class="p-6">
              <div class="flex justify-end">
                <Button type="submit" :disabled="processing"
                  class="px-8 py-2 cursor-pointer hover:bg-opacity-90 transition-colors">
                  {{ processing ? 'Menghantar...' : 'Hantar Permohonan' }}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgramHeader from './ProgramHeader.vue'
import KriteriaPemohon from './KriteriaPemohon.vue'
import ApaYangAndaPerolehi from './ApaYangAndaPerolehi.vue'
import ProgramYangDitawarkan from './ProgramYangDitawarkan.vue'
import SiapaPatutMemohon from './SiapaPatutMemohon.vue'
import { RadioGroup, RadioGroupItem } from '@/resources/js/components/ui/radio-group'
import { Checkbox } from '@/resources/js/components/ui/checkbox'
import { Label } from '@/resources/js/components/ui/label'
import { Input } from '@/resources/js/components/ui/input'
import { Textarea } from '@/resources/js/components/ui/textarea'
import { Button } from '@/resources/js/components/ui/button'
import { Card, CardContent, CardTitle, CardDescription } from '@/resources/js/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/resources/js/components/ui/accordion'
import { useProgramForm } from '@/resources/js/composables/useProgramForm'
import { useAppearance } from '@/resources/js/composables/useAppearance'

const { form, handleRegistrationReasonChange, isReasonSelected, handleProgramChange, isProgramSelected, processing, submitForm } = useProgramForm()
const { awsLogoUrl, chatGptLogoUrl, pythonLogoUrl } = useAppearance()
</script>

<style scoped></style>