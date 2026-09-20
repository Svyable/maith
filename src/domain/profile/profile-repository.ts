import type {
  Profile,
  ProfileIdentity,
  ProfileUpdate,
} from './profile';

export interface ProfileRepository {
  loadOrCreate(identity: ProfileIdentity): Promise<Profile>;
  update(identity: ProfileIdentity, fields: ProfileUpdate): Promise<Profile>;
}
