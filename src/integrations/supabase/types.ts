export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          is_public: boolean
          locale: string
          updated_at: string
          username: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          is_public?: boolean
          locale?: string
          updated_at?: string
          username: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          is_public?: boolean
          locale?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      quiz_sessions: {
        Row: {
          best_streak: number
          client_session_id: string
          content_version: string | null
          correct_answered: number
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          id: string
          score: number
          topic_breakdown: Json
          topics: string[]
          total_answered: number
          user_id: string
        }
        Insert: {
          best_streak: number
          client_session_id: string
          content_version?: string | null
          correct_answered: number
          created_at?: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          id?: string
          score: number
          topic_breakdown?: Json
          topics: string[]
          total_answered: number
          user_id: string
        }
        Update: {
          best_streak?: number
          client_session_id?: string
          content_version?: string | null
          correct_answered?: number
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty"]
          id?: string
          score?: number
          topic_breakdown?: Json
          topics?: string[]
          total_answered?: number
          user_id?: string
        }
        Relationships: []
      }
      user_concept_evidence: {
        Row: {
          client_session_id: string
          concept_id: string
          content_version: string | null
          correct: boolean
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          eliminate_used: boolean
          hint_used: boolean
          id: string
          outcome: string
          primary_concept: boolean
          question_id: number
          timed_out: boolean
          topic: string
          user_id: string
        }
        Insert: {
          client_session_id: string
          concept_id: string
          content_version?: string | null
          correct?: boolean
          created_at?: string
          difficulty: Database["public"]["Enums"]["difficulty"]
          eliminate_used?: boolean
          hint_used?: boolean
          id?: string
          outcome: string
          primary_concept?: boolean
          question_id: number
          timed_out?: boolean
          topic: string
          user_id: string
        }
        Update: {
          client_session_id?: string
          concept_id?: string
          content_version?: string | null
          correct?: boolean
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty"]
          eliminate_used?: boolean
          hint_used?: boolean
          id?: string
          outcome?: string
          primary_concept?: boolean
          question_id?: number
          timed_out?: boolean
          topic?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_concept_evidence_client_session_id_fkey"
            columns: ["client_session_id"]
            isOneToOne: false
            referencedRelation: "quiz_sessions"
            referencedColumns: ["client_session_id"]
          },
        ]
      }
      user_difficulty_stats: {
        Row: {
          best_streak: number
          correct_answered: number
          difficulty: string
          score_total: number
          total_answered: number
          updated_at: string
          user_id: string
        }
        Insert: {
          best_streak?: number
          correct_answered?: number
          difficulty: string
          score_total?: number
          total_answered?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          best_streak?: number
          correct_answered?: number
          difficulty?: string
          score_total?: number
          total_answered?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_stats: {
        Row: {
          best_streak: number
          correct_answered: number
          score_total: number
          total_answered: number
          updated_at: string
          user_id: string
        }
        Insert: {
          best_streak?: number
          correct_answered?: number
          score_total?: number
          total_answered?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          best_streak?: number
          correct_answered?: number
          score_total?: number
          total_answered?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_thinker_achievements: {
        Row: {
          achieved_at: string
          score: number
          thinker_slug: string
          total_questions: number
          user_id: string
        }
        Insert: {
          achieved_at?: string
          score: number
          thinker_slug: string
          total_questions: number
          user_id: string
        }
        Update: {
          achieved_at?: string
          score?: number
          thinker_slug?: string
          total_questions?: number
          user_id?: string
        }
        Relationships: []
      }
      user_topic_stats: {
        Row: {
          correct_answered: number
          topic: string
          total_answered: number
          updated_at: string
          user_id: string
        }
        Insert: {
          correct_answered?: number
          topic: string
          total_answered?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          correct_answered?: number
          topic?: string
          total_answered?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_vault_progress: {
        Row: {
          entry_id: string
          unlocked_at: string
          user_id: string
        }
        Insert: {
          entry_id: string
          unlocked_at?: string
          user_id: string
        }
        Update: {
          entry_id?: string
          unlocked_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      leaderboard_all_time: {
        Row: {
          accuracy_percent: number | null
          avatar_url: string | null
          best_streak: number | null
          correct_answered: number | null
          display_name: string | null
          games_played: number | null
          member_since: string | null
          score_total: number | null
          total_answered: number | null
          updated_at: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: []
      }
      leaderboard_by_topic: {
        Row: {
          accuracy_percent: number | null
          avatar_url: string | null
          correct_answered: number | null
          display_name: string | null
          topic: string | null
          total_answered: number | null
          user_id: string | null
          username: string | null
        }
        Relationships: []
      }
      leaderboard_weekly: {
        Row: {
          accuracy_percent_week: number | null
          avatar_url: string | null
          best_streak_week: number | null
          correct_answered_week: number | null
          display_name: string | null
          games_played_week: number | null
          score_total_week: number | null
          total_answered_week: number | null
          user_id: string | null
          username: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      submit_quiz_session: {
        Args: {
          p_best_streak: number
          p_client_session_id: string
          p_concept_evidence?: Json
          p_content_version?: string
          p_correct_answered: number
          p_difficulty: Database["public"]["Enums"]["difficulty"]
          p_score: number
          p_topic_breakdown?: Json
          p_topics: string[]
          p_total_answered: number
        }
        Returns: {
          best_streak: number
          correct_answered: number
          score_total: number
          total_answered: number
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "user_stats"
          isOneToOne: true
          isSetofReturn: false
        }
      }
    }
    Enums: {
      difficulty: "EASY" | "HARD" | "SOTA"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      difficulty: ["EASY", "HARD", "SOTA"],
    },
  },
} as const
